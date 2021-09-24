import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo_test.svg';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 4px solid #000;
  border-radius: 12px;
`;

const Loading = () => {
  return (
    <Container>
      <LoadingIcon aria-label="Loading Icon" />
    </Container>
  );
};

export default Loading;
