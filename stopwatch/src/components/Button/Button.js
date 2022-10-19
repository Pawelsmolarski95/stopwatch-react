import styles from './Button.module.scss';


const Button = ({ timeStart, timeStop,resetTime }) => {
    return (
        <div className={styles.buttonMain}>
            <button className={styles.button} onClick={timeStart}>Start</button>
            <button className={styles.button} onClick={timeStop}>Stop</button>
            <button className={styles.button} onClick={resetTime}>Reset</button>       
  </div>
    )
};
export default Button