import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((preCount) => preCount + 1);
  };
  useEffect(() => {
    setInterval(tick, 1000);
    return () => {
      clearInterval(tick);
    };
  }, []);
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}

export default IntervalHookCounter;
