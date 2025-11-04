import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="text-center">
        <div className="bg-red-600 text-white text-xl font-semibold rounded-md p-2 w-12 h-10 flex items-center justify-center">
          {String(timeLeft[interval]).padStart(2, '0')}
        </div>
        <div className="text-xs uppercase text-warm-grey mt-1">{interval}</div>
      </div>
    );
  });

  return (
    <div className="flex items-center space-x-3">
      <span className="font-medium text-charcoal">Offer ends in:</span>
      {timerComponents.length ? (
        <div className="flex space-x-2">{timerComponents}</div>
      ) : (
        <span className="font-semibold text-red-600">Offer Expired!</span>
      )}
    </div>
  );
};

export default CountdownTimer;