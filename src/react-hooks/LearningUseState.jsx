import { useState } from 'react';

function LearningUseState() {
  const setInitialValue = () => {
    console.log('how many render??');
    return 0;
  };
  //   const [value, setValue] = useState(setInitialValue()); //console will run every time
  const [value, setValue] = useState(setInitialValue); // will run only once

  //--------------------------------
  const [objVal, setObjVal] = useState({ num: 1, theme: 'blue' });
  const theme = objVal.theme;
  const num = objVal.num;

  const incrementNum = () => {
    setObjVal((prevObjVal) => ({ ...prevObjVal, num: prevObjVal.num + 1 }));
  };

  const onButtonClickAdd = () => setValue((pre) => pre + 1); // make sure to work on previous value rather than the value which is stored!!
  const onButtonClickSub = () => setValue((pre) => pre && pre - 1);

  return (
    <div>
      <div>
        <button onClick={onButtonClickAdd}>+</button>
        {value}
        <button onClick={onButtonClickSub}>-</button>
      </div>

      <div>
        <p>Num: {num}</p>
        <p>Theme: {theme}</p>
        <button onClick={incrementNum}>Increment Number</button>
      </div>
    </div>
  );
}

export default LearningUseState;
