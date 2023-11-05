// The React useCallback Hook returns a memoized callback function
// This allows us to isolate resource intensive functions so that they will not automatically run on every render.
// The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

import { useCallback, useState } from 'react';
import Todos from './Todos';

function LearningUseCallback() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, 'New Todo']);
  }, [todos]);

  /* const addTodo = () => {
    return setTodos((t) => [...t, 'New Todo']);
  }; */

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default LearningUseCallback;
