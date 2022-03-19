import { useState, useEffect } from 'react';

import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [state, setState] = useState({
    rValue: 0,
    gValue: 0,
    bValue: 0,
  });

  // useEffect no processo de Mount

  // useEffect no processo de Update
  useEffect(() => {
    console.log(state);
  }, [state]);

  // useEffect no processo de Unmount

  function handleChange(event) {
    setState({ ...state, [event.target.name]: Number(event.target.value) });
  }

  return (
    <div>
      <SingleColorPicker
        color="r"
        onChange={handleChange}
        value={state.rValue}
        backgroundColor={`rgba(${state.rValue}, 0, 0, 1)`}
      />
      <SingleColorPicker
        color="g"
        onChange={handleChange}
        value={state.gValue}
        backgroundColor={`rgba(0, ${state.gValue}, 0, 1)`}
      />
      <SingleColorPicker
        color="b"
        onChange={handleChange}
        value={state.bValue}
        backgroundColor={`rgba(0, 0, ${state.bValue}, 1)`}
      />

      {state.rValue === 0 && state.gValue === 0 && state.bValue === 0 ? null : (
        <div className="d-flex align-items-center">
          <div
            style={{
              width: '60px',
              height: '60px',
              border: 'solid 2px #000',
              margin: '10px',
              display: 'inline-block',
              backgroundColor: `rgba(${state.rValue}, ${state.gValue}, ${state.bValue}, 1)`,
            }}
          ></div>
          <span>
            rgb({state.rValue}, {state.gValue}, {state.bValue})
          </span>
        </div>
      )}
    </div>
  );
}

export default RGBColorPicker;
