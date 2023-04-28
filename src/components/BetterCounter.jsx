import { useState } from 'react';

function BetterCounter() {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    const change = e.target.innerText;
    setCount(count - -change);
  };
  return (
    <>
      <h2>Better Counter</h2>
      <div id="betterCounter">
        <input type="number" value={count} readOnly />
        <button type="button" onClick={handleClick}>-5</button>
        <button type="button" onClick={handleClick}>-1</button>
        <button type="button" onClick={() => setCount(0)}>R</button>
        <button type="button" onClick={handleClick}>+1</button>
        <button type="button" onClick={handleClick}>+5</button>
      </div>
    </>
  );
}

export default BetterCounter;
