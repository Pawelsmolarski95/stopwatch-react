// import styles from './Button.module.scss';


const Button = ({ timeStart, timeStop,resetTime }) => {
    return (
        <div className="buttons">
            <button onClick={timeStart}>Start</button>
            <button onClick={timeStop}>Stop</button>
            <button onClick={resetTime}>Reset</button>       
  </div>
    )
};
export default Button