import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';

const Container = styled.article`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

const DiaryPresenter = () => {
  return (
    <Container>
      <Header />
      <h1>Diary</h1>
    </Container>
  );
};

export default DiaryPresenter;
