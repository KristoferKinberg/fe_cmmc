import React from 'react';
import {notEmpty} from "../../../../components/Input/Validators";
import AdminForm from "../../AdminForm";
import {SuccessScreen} from "./ResetPasswordScreens";
import {useDispatch, useSelector} from "react-redux";
import {actionResetPasswordByEmail} from  "../../../../stores/admin/adminActions";

const texts = {
  title: 'Reset password',
  text: `To reset your password, please fill in your email address below. An email will then be sent 
  to that address, should it be registered as a an admin email in our systems. Follow the link in
  the email to reset your password.`,
};

export default () =>  {
  const [component, setComponent] = React.useState(null);
  const resetStatus = useSelector(state => state.users.passwordResetData.resetStatus);
  const [resetRedirectStatus, setResetRedirectStatus] = React.useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = React.useState({
    email: {
      value: '',
      label: 'email',
      type: 'text',
    }
  });

  const validators = {
    email: [notEmpty(form.email.value)],
  };

  if (resetStatus === 1 && !resetRedirectStatus) {
    setComponent(SuccessScreen());
    setResetRedirectStatus(true);
  }

  /**
   * Save user
   */
  const requestResetPassword = () => dispatch(actionResetPasswordByEmail({ email: form.email.value }));

  return <AdminForm
    {...texts}
    form={form}
    validators={validators}
    onSubmit={requestResetPassword}
    onChange={setForm}
    Component={component}
  />;
};
