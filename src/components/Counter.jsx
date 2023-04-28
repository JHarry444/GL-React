import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState('0');

  return (
    <>
      <label htmlFor="counter">
        <input value={count} id="counter" />
      </label>
      {' '}
      <button type="button" onClick={() => setCount(count - -1)}>+1</button>
    </>
  );
}

export default Counter;
