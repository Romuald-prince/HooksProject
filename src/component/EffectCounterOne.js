import React, { useState, useEffect } from "react";

function EffectCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - updating document title");
    document.title = `You Cliked ${count} Times`;
  }, [count]);

  const incrementCount = () => {
    setCount((preCount) => preCount + 1);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={incrementCount}>ReClick {count} times</button>
    </div>
  );
}

export default EffectCounterOne;
