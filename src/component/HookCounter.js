import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleCount}>Count- {count}</button>
    </div>
  );
}

export default HookCounter;
