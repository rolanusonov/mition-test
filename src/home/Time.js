import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 30;
const timerProps = {
    isPlaying: true,
    size: 90,
    strokeWidth: 6
};
const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
        </div>
    );
};
const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
export default function App() {
    const stratTime = Date.now() / 1000;
    const endTime = stratTime + 243248;
    const remainingTime = endTime - stratTime;

    return (
        <div className="App">
            <CountdownCircleTimer{...timerProps} colors="#218380" duration={minuteSeconds} initialRemainingTime={remainingTime % minuteSeconds} onComplete={(totalElapsedTime) => ({shouldRepeat: remainingTime - totalElapsedTime > 0})}>{({ elapsedTime, color }) => (<span style={{ color }}>{renderTime("seconds", getTimeSeconds(elapsedTime))}</span>)}
            </CountdownCircleTimer>
        </div>
    );
}
