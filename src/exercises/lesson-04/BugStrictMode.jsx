// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h2>Count: {count}</h2>;
}

// Write your explanation of how StrictMode helps us catch this bug
// UseEffect run twice on mound in React StrictMode, that caused multiple intervals and count increment by 2.
// To solve it we stored our interval as a variable. Then used cleanup function to ensure that only 1 interval runs.
