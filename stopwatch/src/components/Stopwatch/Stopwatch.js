import { useEffect, useState } from 'react';
// import styles from './Stopwatch.module.scss';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';

const Stopwatch = () => {
    const [start, setStart] = useState(false);
    const [stop, setStop] =  useState(true);
    const [time, setTime] = useState(0);
    
    useEffect (() => {
        let interval;
        if(start & stop === false) {
        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10 )
        }, 10)
        } else {
            clearInterval(interval);
        }
        return() => {
            clearInterval(interval);
        }; 
    }, [stop, start]); 

    const timeStart = () => {
        setStart(true);
        setStop(false);
    };
    
    const timeStop = () => {
        setStop(true);
        setStart(false);
    };
    
    const resetTime = () => {
        setStart(false);
        setTime(0);
    };
 
return (
    <div>
        <Timer time={time}/>
        <Button timeStart={timeStart} timeStop={timeStop} resetTime={resetTime} />            
    </div>
    
    
    
)
}
export default Stopwatch