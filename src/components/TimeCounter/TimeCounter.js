import { useState, useEffect } from 'react';
import styles from './TimeCounter.module.scss';

export const TimeCounter = ({ time }) => {
  const [formattedTime, setFormattedTime] = useState();

  useEffect(() => {
    setFormattedTime(msToTime(time));
  }, [time]);

  const msToTime = (duration) => {
    var milliseconds = Math.floor(duration % 1000),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
  };

  return <div className={styles.timeCounter}>{formattedTime}</div>;
};

export default TimeCounter;
