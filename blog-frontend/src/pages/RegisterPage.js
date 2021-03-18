import React from 'react';
import AuthTemlate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm'

const RegisterPage = () => {
  return (
    <AuthTemlate>
      <RegisterForm />
    </AuthTemlate>
  );
};

export default RegisterPage;
