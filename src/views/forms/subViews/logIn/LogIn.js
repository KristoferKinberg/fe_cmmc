import AdminForm from "../../AdminForm";
import React from "react";
import {
  StyledDistancer,
  StyledDistancerWrapper,
  StyledResetLinkWrapper,
  StyledResetWrapper
} from "./StyledLogin";
import {useDispatch, useSelector} from "react-redux";
import {actionAdminDoLogin} from "../../../../stores/admin/adminActions";
import {actionChangeView} from "../../../../stores/page/pageActions";

const texts = {
  title: 'Log in',
  text: `Welcome! Enter credentials below to login.`,
};

const validators = {
  email: [],
  password: [],
};

export default () => {
  const dispatch = useDispatch();
  const backendErrors = useSelector(state => state.admin.loginData.backendErrors);
  const [form, setForm] = React.useState({
    email: {
      value: '',
      label: 'email',
      type: 'text',
    },
    password: {
      value: '',
      label: 'password',
      type: 'password',
    }
  });

  /**
   * Prepares the data and filters out the necessary information
   * @returns {{}|{[p: string]: *}}
   */
  const prepData = () => Object.keys(form).reduce((acc, curr) => ({ ...acc, [curr]: form[curr].value }), {});

  /**
   * Do login
   */
  const doLogin = () => dispatch(actionAdminDoLogin(prepData()));

  /**
   * Route to change password
   */
  const navigateResetPassword = () => dispatch(actionChangeView('RESET_PASSWORD'));

  /**
   * Renders a link to reset password
   * @returns {*}
   */
  const renderLink = () => <StyledResetWrapper>
    <StyledDistancerWrapper>
      <StyledDistancer />
    </StyledDistancerWrapper>

    <StyledResetLinkWrapper>
      <label onClick={navigateResetPassword}>
        Forgot password
      </label>
    </StyledResetLinkWrapper>

    <StyledDistancerWrapper>
      <StyledDistancer />
    </StyledDistancerWrapper>
  </StyledResetWrapper>;

  return <AdminForm
      {...texts}
      form={form}
      validators={validators}
      onSubmit={doLogin}
      onChange={setForm}
      errors={backendErrors}
    >
    { renderLink() }
  </AdminForm>;
};
