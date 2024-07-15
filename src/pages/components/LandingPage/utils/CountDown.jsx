import { useState, useEffect } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';

function useCountdown(finishDate) {
  const calculateTimeLeft = () => {
    const difference = +new Date(finishDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [finishDate]);

  return timeLeft;
}

function AnimatedCounter({ value, label }) {
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
      setDisplayValue(value);
    }, [value]);

    return (
        <div className="p-5 text-2xl border-2 border-black rounded-md bg-white relative w-20 h-20">
        <AnimatePresence initial={false}>
          <motion.div
            key={displayValue}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {displayValue}{label}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

function Countdown({ finishDate }) {
  const { days, hours, minutes, seconds } = useCountdown(finishDate);

  return (
    <div className="flex gap-2 text-black">
      <AnimatedCounter value={days} label="d" />
      <AnimatedCounter value={hours} label="h" />
      <AnimatedCounter value={minutes} label="m" />
      <AnimatedCounter value={seconds} label="s" />
    </div>
  );
}

export default Countdown;
