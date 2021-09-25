import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Calendar from '../../Components/Calendar';
import ColorLogs from '../../Components/ColorLogs';

const Container = styled.article`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

const Content = styled.main`
  width: min(1000px, 100%);

  & > section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Diaries = styled.article``;

const HomePresenter = () => {
  return (
    <Container>
      <Header></Header>
      <Content>
        <section>
          <Calendar></Calendar>
          <ColorLogs></ColorLogs>
        </section>
        <Diaries>
          <h3>Diaries</h3>
        </Diaries>
      </Content>
    </Container>
  );
};

export default HomePresenter;
