import React, { useState, useEffect } from 'react';
import ExpensePage from './components/ExpensesComponent/ExpensePage';
import './App.css';
import logo from './assets/react.svg';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='flex items-center justify-center h-screen'>
      {/* {showWelcome ? (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
          <div className='text-5xl text-center animate-slide-up-and-fade-out'>
            <img src={logo} alt='My Daily' className='h-20 mb-6' />
            Welcome to My Daily
          </div>
        </div>
      ) : (
        <ExpensePage />
      )} */}
      <ExpensePage />
    </div>
  );
};

export default App;
