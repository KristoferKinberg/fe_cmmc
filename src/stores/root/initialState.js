export default {
  admin: {
    token: '',
    inviteData: {
      token: null,
      inviteStatus: null,
    },
    form: {
      email: { label: 'Email', value: '', type: 'text', disabled: true },
      firstName: { label: 'First name', value: '', type: 'text' },
      lastName: { label: 'Last name', value: '', type: 'text' },
      password: { label: 'Password', value: '', type: 'password' },
      repeatPassword: { label: 'Repeast password', value: '', type: 'password' },
    },
    newPassForm: {
      email: { value: '', label: 'email', type: 'text', disabled: true, },
      password: { value: '', label: 'Password', type: 'password', },
      repeatPassword: { value: '', label: 'Repeat password', type: 'password', },
    },
    loginData: {
      loginStatus: null,
      backendErrors: [],
    },
    passwordResetData: {
      resetStatus: null,
    },
    newPassData: {
      newPassStatus: null,
    }
  }
};
