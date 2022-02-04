import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';

const Container = styled.article`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

const LoginPresenter = () => {
  return (
    <Container>
      <Header />
      <h1>Login</h1>
    </Container>
  );
};

export default LoginPresenter;
