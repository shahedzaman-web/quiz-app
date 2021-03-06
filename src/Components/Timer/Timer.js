import React, { useEffect, useState } from "react";

const Timer = ({
  hours = 0,
  minutes = 0,
  seconds = 0,
  setIsFinished,
  over,
  setOver,
}) => {
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (over) return;
    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
      setIsFinished(true);
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className="text-center pt-3">
      <h1>{`${h.toString().padStart(2, "0")}:${m
        .toString()
        .padStart(2, "0")}:${s.toString().padStart(2, "0")}`}</h1>
      <p className="text-danger">{over ? "Time's up!" : ""}</p>
    </div>
  );
};

export default Timer;
