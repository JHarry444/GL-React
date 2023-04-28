/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

function Converter() {
  const [miles, setMiles] = useState(0);
  const [kms, setKms] = useState(0);

  const milesHandler = ({ target: { value } }) => {
    setMiles(value);
    setKms(value * 1.6);
  };

  const kmsHandler = ({ target: { value } }) => {
    setMiles(value / 1.6);
    setKms(value);
  };

  return (
    <>
      <h2>Converter</h2>
      <div id="converter" style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: '35%' }}>
          <label htmlFor="miles">
            Miles
          </label>
          <input type="text" value={miles} onChange={milesHandler} id="miles" min={0} />
          <label htmlFor="kms">
            Kms
          </label>
          <input type="text" value={kms} onChange={kmsHandler} id="kms" />
        </div>
      </div>
    </>
  );
}

export default Converter;
