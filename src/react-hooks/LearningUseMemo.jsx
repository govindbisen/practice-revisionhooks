import { useEffect, useMemo, useState } from 'react';

function LearningUseMemo() {
  const [number, setNumber] = useState();
  const [dark, setDark] = useState(false);
  //   const doubleNumber = slowFunction(number);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  // referential equality .. so only when dark will change it will run not for every number change (render).
  /*    const ThemeStyle ={
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'azure' : 'red',
        fontSize: '30px',
      } */

  const ThemeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'azure' : 'red',
      fontSize: '30px',
    };
  }, [dark]);

  useEffect(() => {
    console.log('will rrun every time if i wont use use memo');
  }, [ThemeStyle]);
  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={ThemeStyle}>{doubleNumber}</div>
    </div>
  );
}

export default LearningUseMemo;

function slowFunction(num) {
  console.log('calling Slow function!! ');
  for (let i = 0; i <= 10000; i++) {}
  return num * 2;
}
