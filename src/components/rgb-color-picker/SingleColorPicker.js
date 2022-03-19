function SingleColorPicker(props) {
  function handleBackgroundColor(color) {
    if (color === 'r') {
      return `rgba(${props.value}, 0, 0, 1)`;
    }

    if (color === 'g') {
      return `rgba(0, ${props.value}, 0, 1)`;
    }

    if (color === 'b') {
      return `rgba(0, 0, ${props.value}, 1)`;
    }
  }

  return (
    <div className="d-flex align-items-center">
      <div
        style={{
          width: '60px',
          height: '60px',
          border: 'solid 2px #000',
          margin: '10px',
          display: 'inline-block',
          backgroundColor: handleBackgroundColor(props.color),
          // Fazer com condicional também
        }}
      ></div>

      <div className="d-inline-block">
        <label className="me-2" htmlFor={`colorPicker${props.color}`}>
          {props.color.toUpperCase()}:
        </label>
        <input
          id={`colorPicker${props.color}`}
          type="number"
          min={0}
          max={255}
          name={`${props.color}Value`}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}

export default SingleColorPicker;
