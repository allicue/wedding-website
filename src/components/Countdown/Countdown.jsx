import React, { useEffect, useState } from 'react';
import './Countdown.css'

function Countdown(props) {

  const calculateTimeLeft = () => {
    const difference = new Date(`2021-10-1`) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
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
      <span className='header-subtext countdown-text'>
        {timeLeft[interval]} {interval}{" "} to Go!<br></br>
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