import React from 'react';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

const SingleHoliday = ({
  titolo,
  durata,
  descrizione,
  prezzo,
  img,
  nextHoliday,
  prevHoliday,
}) => {
  return (
    <div style={{ textAlign: 'center', lineHeight: '1.5' }}>
      <h3 style={{ padding: '15px' }}>{titolo}</h3>
      <img src={img} alt={titolo} className="img" />
      <div style={{ height: '150px' }}>
        <p>{durata}</p>
        <p>{descrizione}</p>
        <small>{prezzo} soldi</small>
      </div>

      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          marginTop: '15px',
        }}
      >
        <button className="btn" onClick={prevHoliday}>
          <GrFormPreviousLink className="icon"></GrFormPreviousLink>
        </button>
        <button className="btn" onClick={nextHoliday}>
          <GrFormNextLink className="icon"></GrFormNextLink>
        </button>
      </div>
    </div>
  );
};

export default SingleHoliday;
