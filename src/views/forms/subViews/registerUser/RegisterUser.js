import React from 'react';
import AdminForm from "../../AdminForm";
import {FailureScreen, InvalidToken, SuccessScreen} from './ResultScreens';
import {useDispatch, useSelector} from "react-redux";
import {actionGetEmail, actionSaveUser, actionUpdateForm} from  "../../../../stores/admin/adminActions";
import {minLength, notEmpty, match} from "../../../../components/Input/Validators";

const texts = {
  title: 'Register',
  text: `Welcome! You have been invited to partake in the maintanance of the Creative Coast Website. To do so,
        \nplease fill in the form and submit it. You can then log in and edit the data.`,
};

export default () =>  {
  const dispatch = useDispatch();
  const [component, setComponent] = React.useState(null);
  const [inviteUserRedirectStatus, setInviteUserRedirectStatus] = React.useState(false);
  const form = useSelector(state => state.admin.form);
  const inviteUserStatus = useSelector(state => state.admin.inviteData.inviteStatus);
  // const { token } = useParams();
  const token = ':D' // TODO - BORDE NOG ÄNDRA TILL EN RIKTIG TOKEN

  const setForm = form => dispatch(actionUpdateForm(form));

  React.useEffect(() => {
    dispatch(actionGetEmail(token));
  }, []);

  if (inviteUserStatus !== null && inviteUserStatus === 2 && !inviteUserRedirectStatus){
    setComponent(InvalidToken());
    setInviteUserRedirectStatus(true);
  }

  if (inviteUserStatus !== null && inviteUserStatus === 3 && !inviteUserRedirectStatus){
    setComponent(SuccessScreen());
    setInviteUserRedirectStatus(true);
  }

  if (inviteUserStatus !== null && inviteUserStatus === 4 && !inviteUserRedirectStatus){
    setComponent(FailureScreen());
    setInviteUserRedirectStatus(true);
  }

  const validators = {
    email: [notEmpty(form.email.value)],
    firstName: [notEmpty(form.firstName.value)],
    lastName: [notEmpty(form.lastName.value)],
    password: [minLength(8, form.password.value), match(form.password.value, form.repeatPassword.value)],
    repeatPassword: [],
  };

  /**
   * Save user
   */
  const saveUser = () => {
    const { email, repeatPassword, ...rest } = Object.keys(form).reduce((acc, curr) => ({ ...acc, [curr]: form[curr].value }), {});
    const data = { ...rest, token };

    dispatch(actionSaveUser(data));
  };

  return <AdminForm
    {...texts}
    form={form}
    validators={validators}
    onSubmit={saveUser}
    onChange={setForm}
    Component={component}
  />;
};
