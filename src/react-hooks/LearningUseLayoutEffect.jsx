import { useLayoutEffect, useState } from 'react';
// useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
// React guarantees that the code inside useLayoutEffect and any state updates scheduled inside it will be processed before the browser repaints the screen. This lets you render the tooltip, measure it, and re-render the tooltip again without the user noticing the first extra render. In other words, useLayoutEffect blocks the browser from painting.
function LearningUseLayoutEffect() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log({ count });
  }, [count]);
  return (
    <div>
      <input
        type='number'
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
    </div>
  );
}

export default LearningUseLayoutEffect;
