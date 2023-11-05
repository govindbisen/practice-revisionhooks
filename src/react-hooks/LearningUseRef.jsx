import { useEffect, useRef, useState } from 'react';

function LearningUseRef() {
  const [name, setName] = useState('');
  const InputRef = useRef();
  const prevName = useRef('');
  // to focus on input
  function focus() {
    console.log(InputRef.current.focus); // same as queryselector
    InputRef.current.focus(); //value
  }

  //to store previous value
  useEffect(() => {
    prevName.current = name;
    return () => {};
  }, [name]);

  return (
    <div>
      <input
        ref={InputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        my name is {name}Previous name is {prevName.current}
      </div>
      <button onClick={focus}> Focus to Input on click</button>
    </div>
  );
}

export default LearningUseRef;
