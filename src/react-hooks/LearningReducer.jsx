import { useReducer } from 'react';

function LearningReducer() {
  const InitialState = { age: 30 };

  function reducer(state, action) {
    if (action.type === 'incremented_age') {
      return {
        age: state.age + 1,
      };
    }
    throw Error('Unknown action.');
  }

  const [state, dispatch] = useReducer(reducer, InitialState);
  console.log(InitialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'incremented_age' })}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </div>
  );
}

export default LearningReducer;
