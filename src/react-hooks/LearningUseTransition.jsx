// useTransition is a React Hook that lets you update the state without blocking the UI.

import { useState, useTransition } from 'react';

function LearningUseTransition() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const LIST_SIZE = 20000;

  /*  function handleClick(e) {
    setInput(e.target.value);
    const listToDisplay = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      listToDisplay.push(e.target.value);
    }
    setList(listToDisplay);
  } */

  function handleClick(e) {
    setInput(e.target.value);

    startTransition(() => {
      const listToDisplay = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        listToDisplay.push(e.target.value);
      }
      setList(listToDisplay);
    });
  }
  return (
    <div>
      <input type='text' value={input} onChange={handleClick} />
      {isPending
        ? 'Loading...'
        : list.map((item, index) => {
            return <div key={index}> {item} </div>;
          })}
    </div>
  );
}

export default LearningUseTransition;
