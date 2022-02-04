import React from 'react';
import { Link } from 'react-router-dom';
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
      <Header />
      <Content>
        <section>
          <Calendar></Calendar>
          <ColorLogs></ColorLogs>
        </section>
        <Diaries>
          <Link to="/diary">
            <h3>Diaries</h3>
          </Link>
        </Diaries>
      </Content>
    </Container>
  );
};

export default HomePresenter;
