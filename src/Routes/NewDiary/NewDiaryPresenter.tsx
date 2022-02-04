import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';

const Container = styled.article`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

const NewDiaryPresetner = () => {
  return (
    <Container>
      <Header />
      <h1>New Diary</h1>
    </Container>
  );
};

export default NewDiaryPresetner;
