export const startCountdown = (seconds, onTick, onComplete) => {
  let timeLeft = seconds;

  // call once immediately
  if (onTick) onTick(timeLeft);

  const interval = setInterval(() => {
    timeLeft -= 1;

    if (onTick) onTick(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(interval);
      if (onComplete) onComplete();
    }
  }, 1000);

  return () => clearInterval(interval); // return cleanup
};
