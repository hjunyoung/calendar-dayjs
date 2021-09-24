import dayjs from 'dayjs';
import React from 'react';
import CalendarPresenter from './CalendarPresenter';

interface IState {
  calendarNow: dayjs.Dayjs;
}

class CalendarContainer extends React.Component<{}, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      calendarNow: dayjs(),
    };
  }

  prevMonth = () => {
    const prevMonth = this.state.calendarNow.subtract(1, 'M');
    this.setState({ calendarNow: prevMonth });
  };

  nextMonth = () => {
    const nextMonth = this.state.calendarNow.add(1, 'M');
    this.setState({ calendarNow: nextMonth });
  };

  goToday = () => {
    const today = dayjs();
    this.setState({ calendarNow: today });
  };

  getCalendarData = (calendarNow: dayjs.Dayjs): [number[], number, number] => {
    const thisLastDate: number = calendarNow.daysInMonth();
    const thisLastDay: number = calendarNow
      .date(calendarNow.daysInMonth())
      .day();
    const prevLastDate: number = calendarNow.subtract(1, 'M').daysInMonth();
    const prevLastDay: number = calendarNow.date(1).subtract(1, 'd').day();

    const prevDates: number[] = [];
    const thisDates: number[] = [];
    const nextDates: number[] = [];

    if (prevLastDay !== 6) {
      for (let i = prevLastDay; i >= 0; i--) {
        prevDates.push(prevLastDate - i);
      }
    }

    for (let i = 0; i < thisLastDate; i++) {
      thisDates.push(i + 1);
    }

    for (let i = 0; i < 6 - thisLastDay; i++) {
      nextDates.push(i + 1);
    }

    const fullDates: number[] = [...prevDates, ...thisDates, ...nextDates];
    const thisFirstIndex: number = fullDates.indexOf(1);
    const thisLastIndex: number = fullDates.lastIndexOf(thisLastDate);

    return [fullDates, thisFirstIndex, thisLastIndex];
  };

  render() {
    const { calendarNow } = this.state;
    const [fullDates, thisFirstIndex, thisLastIndex] =
      this.getCalendarData(calendarNow);
    return (
      <CalendarPresenter
        calendarNow={calendarNow}
        fullDates={fullDates}
        thisFirstIndex={thisFirstIndex}
        thisLastIndex={thisLastIndex}
        prevMonth={this.prevMonth}
        nextMonth={this.nextMonth}
        goToday={this.goToday}
      />
    );
  }
}

export default CalendarContainer;
