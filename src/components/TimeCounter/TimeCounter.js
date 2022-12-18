import styles from './TimeCounter.module.scss';

export const TimeCounter = ({ time }) => {
  const msToTime = (duration) => {
    let milliseconds = Math.floor(duration % 1000),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}:${milliseconds
      .toString()
      .padStart(3, '0')}`;
  };

  return <div className={styles.timeCounter}>{msToTime(time)}</div>;
};

export default TimeCounter;
