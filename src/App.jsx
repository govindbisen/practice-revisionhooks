import './App.css';
import LearningUseState from './react-hooks/LearningUseState';
import LearningUseEffect from './react-hooks/LearningUseEffect.jsX';
import Navigation from './navigation/Navigation';
import LearningUseRef from './react-hooks/LearningUseRef';
import LearningUseMemo from './react-hooks/LearningUseMemo';
import LearningUseCallback from './react-hooks/LearningUseCallback';
import LearningReducer from './react-hooks/LearningReducer';
import LearningUseTransition from './react-hooks/LearningUseTransition';
import LearningUseDefferedValue from './react-hooks/LearningUseDefferedValue';
import LearningUseLayoutEffect from './react-hooks/LearningUseLayoutEffect';
import StatusBar from './react-hooks/LearningUseDebugValue/StatusBar';

function App() {
  let toDisplay = true;
  let toNotDisplay = false;
  return (
    <>
      {toDisplay && <StatusBar />}
      {toDisplay && <p> Hello Hello Hi Hi !! </p>}
      {toNotDisplay && <LearningUseLayoutEffect />}
      {toNotDisplay && <LearningUseDefferedValue />}
      {toNotDisplay && <LearningUseTransition />}
      {toNotDisplay && <LearningReducer />}
      {toNotDisplay && <LearningUseCallback />}
      {toNotDisplay && <LearningUseRef />}
      {toNotDisplay && <LearningUseState />}
      {toNotDisplay && <LearningUseEffect />}
      {toNotDisplay && <LearningUseMemo />}
      {toNotDisplay && <Navigation />}
    </>
  );
}

export default App;
