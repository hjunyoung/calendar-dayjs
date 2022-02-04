import React from 'react';
import styled from 'styled-components';

const GridWidth = 600;
const GridHeight = 255;

const Container = styled.article`
  width: ${GridWidth}px;
  height: 300px;
`;

const Title = styled.h3`
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LogGrid = styled.section`
  width: 100%;
  height: ${GridHeight}px;
  grid-template-rows: repeat(7, 1fr);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const LogContainer = styled.div`
  width: ${Math.floor(GridHeight / 7)}px;
  height: ${Math.floor(GridHeight / 7)}px;
  position: relative;
`;

const LogItem = styled.div`
  border-radius: 50%;
  /* border: 1px solid black; */
  width: 90%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ColorLogsPresenter = () => {
  const colNumber = Math.floor((7 * GridWidth) / GridHeight);
  const numArr = [...Array(colNumber * 7)].map((value, index) => index);

  return (
    <Container>
      <Title>Color Logs</Title>
      <LogGrid>
        {numArr.map((value, index) => {
          const n1 = Math.floor(Math.random() * 255);
          const n2 = Math.floor(Math.random() * 255);
          const n3 = Math.floor(Math.random() * 255);
          return (
            <LogContainer key={index}>
              <LogItem
                style={{ backgroundColor: `rgb(${n1}, ${n2}, ${n3})` }}
              ></LogItem>
            </LogContainer>
          );
        })}
      </LogGrid>
    </Container>
  );
};

export default ColorLogsPresenter;
