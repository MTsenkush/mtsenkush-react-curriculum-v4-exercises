import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      <Child onIncrement={incrementCounter} />
    </div>
  );
}
