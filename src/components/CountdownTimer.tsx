import { useState, useEffect } from "react";

const WEDDING_DATE = new Date("2026-04-02T21:41:00");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {units.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg border border-gold/30 bg-cream-dark/50 backdrop-blur-sm">
            <span className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <p className="font-body text-xs md:text-sm text-muted-foreground mt-2 tracking-widest uppercase">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
