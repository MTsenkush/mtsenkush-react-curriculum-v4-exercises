// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useState } from 'react';

export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((prev) => prev + 1);
  }

  return <button onClick={handleClick}>Clicks: {clickCount}</button>;
}

//We had to call re-render after clicking the button and useRef does not do that.
//To update UI when the count of clicks changes we needed to use useState.
