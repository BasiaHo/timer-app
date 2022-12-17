import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import TimeCounter from '../TimeCounter/TimeCounter';
import styles from './Timer.module.scss';

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState();

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleTimerStart = () => {
    const timer = setInterval(() => {
      setTime((time) => time + 1);
    }, 1);
    setTimer(timer);
  };

  const handleTimerStop = () => {
    clearInterval(timer);
  };

  const handleTimerReset = () => {
    handleTimerStop();
    setTime(0);
  };

  return (
    <div className={styles.timer}>
      <TimeCounter time={time} />
      <div>
        <Button onClick={handleTimerStart}>START</Button>
        <Button onClick={handleTimerStop}>STOP</Button>
        <Button onClick={handleTimerReset}>RESET</Button>
      </div>
    </div>
  );
};

export default Timer;
