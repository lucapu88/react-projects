import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import data from '../data';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

const Slider = () => {
  const [reviews, setReviews] = useState(data);
  const [active, setActive] = useState(0);

  const nextReview = () => {
    setActive(oldValue => {
      if (oldValue + 1 === data.length) {
        //se il valore attuale è uguale all'ultimo dell'array di dati, passa al primo elemento
        return 0;
      }
      return oldValue + 1;
    });
  };
  const prevReview = () => {
    setActive(oldValue => {
      if (oldValue - 1 < 0) {
        //se il valore attuale è inferiore a zero torna al penultimo elemento dell'array
        return data.length - 1;
      } else {
        return oldValue - 1;
      }
    });
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     nextReview();
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [active]);

  return (
    <div className="container slider">
      {reviews.map((r, index) => {
        let positionClass = '';
        if (index === active || (active === 0 && index === r.length - 1)) {
          positionClass = 'active';
        } else if (index + 1 === active) {
          positionClass = 'prev';
        } else {
          positionClass = 'next';
        }

        return <Slide key={r.id} {...r} positionClass={positionClass}></Slide>;
      })}
      <div className="btn-group slider-btn-group">
        <button className="btn" onClick={prevReview}>
          <GrFormPreviousLink className="icon"></GrFormPreviousLink>
        </button>
        <button className="btn" onClick={nextReview}>
          <GrFormNextLink className="icon"></GrFormNextLink>
        </button>
      </div>
    </div>
  );
};

export default Slider;
