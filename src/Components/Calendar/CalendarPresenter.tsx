import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import localeDate from 'dayjs/plugin/localeData';
// import 'dayjs/locale/ko';

dayjs.extend(localeDate);

const Container = styled.article`
  width: 500px;
`;

const Header = styled.section`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: center;
  font-size: 24px;
  width: 100%;
  height: calc(500px / 7);
  margin-bottom: 10px;
`;

const Year = styled.div`
  font-size: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 20px;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  ${Year} {
    justify-content: center;
  }

  p {
    cursor: pointer;
  }

  button {
    position: absolute;
    cursor: pointer;
  }
`;

const Content = styled.section``;

const calendarGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(500px / 7);
    height: calc(500px / 7);
    border: 1px solid #eee;
  }
`;

const Days = styled(calendarGrid)``;

const Dates = styled(calendarGrid)`
  div.other > p {
    opacity: 0.3;
  }

  .today > p {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #bbb;
    color: #fff;
    width: 50%;
    height: 50%;
  }
`;

interface IProps {
  calendarNow: dayjs.Dayjs;
  fullDates: number[];
  thisFirstIndex: number;
  thisLastIndex: number;
  prevMonth: () => void;
  nextMonth: () => void;
  goToday: () => void;
}

const CalendarPresenter: React.FunctionComponent<IProps> = ({
  calendarNow,
  fullDates,
  thisFirstIndex,
  thisLastIndex,
  prevMonth,
  nextMonth,
  goToday,
}) => {
  const calendarMonth = calendarNow.format('YYYY-MM');
  const currentMonth = dayjs().format('YYYY-MM');

  return (
    <Container>
      <Header>
        <div></div>
        <Nav>
          <Year>{calendarNow.format('YYYY')}</Year>
          <div>
            <p onClick={prevMonth}>&lt;</p>
            <p>{calendarNow.format('MMMM')}</p>
            <p onClick={nextMonth}>&gt;</p>
          </div>
        </Nav>
        <button onClick={goToday}>Today</button>
      </Header>
      <Content>
        <Days>
          {dayjs.weekdaysShort().map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </Days>
        <Dates>
          {fullDates.map((date, index) => {
            const className: string =
              index < thisFirstIndex || index > thisLastIndex
                ? 'other'
                : date === dayjs().date() && calendarMonth === currentMonth
                ? 'this today'
                : 'this';
            return (
              <div className={className} key={index}>
                <p>{date}</p>
              </div>
            );
          })}
        </Dates>
      </Content>
    </Container>
  );
};

export default CalendarPresenter;
