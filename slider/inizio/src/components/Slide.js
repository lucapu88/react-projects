import React from 'react';
import starCreator from '../utils';

const Slide = ({ id, voto, recensione, autore, positionClass }) => {
  return (
    <div className={`slide ${positionClass}`}>
      <small style={{ marginLeft: '80%' }}>Recensione N. {id}</small>
      <p>
        Autore: <strong>{autore}</strong>
      </p>
      <p>Voto: {starCreator(voto)}</p>
      <p style={{ borderTop: '1px solid #FFFF', padding: '10px' }}>
        {recensione}
      </p>
    </div>
  );
};

export default Slide;
