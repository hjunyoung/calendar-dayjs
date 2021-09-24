import React from 'react';
import GlobalStyles from './GlobalStyles';
import Header from './Components/Header';
import Calendar from './Components/Calendar';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div className="App"></div>
      <Calendar />
    </>
  );
}

export default App;
