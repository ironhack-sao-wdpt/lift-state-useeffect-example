import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Facebook from './Facebook';
// import SignupPage from './SignupPage';
// import RGBColorPicker from './rgb-color-picker/RGBColorPicker';
import EffectExample from './EffectExample';
import CleanupExample from './CleanupExample';

function App() {
  const [timerMounted, setTimerMounted] = useState(true);

  return (
    <div className="m-5">
      {/* <h1>Iteration 14 - Facebook</h1>
      <Facebook />
      <h1>Iteration 15 - SignupPage</h1>
      <SignupPage />
      <h1>Iteration 16 - RGBColorPicker</h1>
      <RGBColorPicker /> */}
      <EffectExample />

      <button
        className="mb-3 mt-5"
        onClick={() => setTimerMounted(!timerMounted)}
      >
        Trocar exibição do Timer
      </button>
      {/* Exibindo CleanupExample condicionalmente */}
      {timerMounted && <CleanupExample />}
    </div>
  );
}

export default App;
