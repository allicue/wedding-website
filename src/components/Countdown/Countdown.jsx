import React, { useEffect, useState } from 'react';
import './Countdown.css'

function Countdown(props) {

  const calculateTimeLeft = () => {
    // let year = new Date().getFullYear();
    const difference = new Date(`2021-11-12`) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        // Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        // Minutes: Math.floor((difference / 1000 / 60) % 60),
        // Seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  }) ;

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className='countdown-text'>
        {timeLeft[interval]} {interval}{" "} To Go!<br></br>
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? timerComponents : <h2>We made it down the aisle!</h2>}
    </div>
  );
}

export default Countdown;