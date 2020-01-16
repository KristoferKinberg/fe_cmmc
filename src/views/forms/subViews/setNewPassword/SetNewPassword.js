import React from 'react';
import {match, minLength, notEmpty} from "../../../../components/Input/Validators";
import AdminForm from "../../AdminForm";
import {FailureScreen, InvalidToken} from "../registerUser/ResultScreens";
import {SuccessScreen} from "./SetNewPasswordScreens";
import {
  actionGetNewPassEmail,
  actionSetNewPassword,
  actionUpdateNewPassForm
} from "../../../../stores/admin/adminActions";
import {useDispatch, useSelector} from "react-redux";

const texts = {
  title: 'Reset password',
  text: `To reset your password, please fill in your email address below. An email will then be sent 
  to that address, should it be registered as a an admin email in our systems. Follow the link in
  the email to reset your password.`,
};

export default () =>  {
  const token = ';D';
  const dispatch = useDispatch();
  const [component, setComponent] = React.useState(null);
  const form = useSelector(state => state.users.newPassForm);
  const newPassStatus = useSelector(state => state.users.newPassData.newPassStatus);
  const [newPassRedirectStatus, setNewPassRedirectStatus] = React.useState(false);

  React.useEffect(() => {
    dispatch(actionGetNewPassEmail(token));
  }, []);

  const setForm = form => dispatch(actionUpdateNewPassForm(form));

  const validators = {
    email: [notEmpty(form.email.value)],
    password: [minLength(8, form.password.value), match(form.password.value, form.repeatPassword.value)],
    repeatPassword: [],
  };

  const updatePassword = () => dispatch(actionSetNewPassword({ password: form.password.value, token }));


  if (newPassStatus !== null && newPassStatus === 2 && !newPassRedirectStatus){
    setComponent(InvalidToken());
    setNewPassRedirectStatus(true);
  }

  if (newPassStatus !== null && newPassStatus === 3 && !newPassRedirectStatus){
    setComponent(SuccessScreen());
    setNewPassRedirectStatus(true);
  }

  if (newPassStatus !== null && newPassStatus === 4 && !newPassRedirectStatus){
    setComponent(FailureScreen());
    setNewPassRedirectStatus(true);
  }

  return <AdminForm
    {...texts}
    form={form}
    validators={validators}
    onSubmit={updatePassword}
    onChange={setForm}
    Component={component}
  />;
};
