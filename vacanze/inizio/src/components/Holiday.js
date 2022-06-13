import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleHoliday from './SingleHoliday';
const url = 'https://react--course-api.herokuapp.com/api/v1/data/vacanze';

const Holiday = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const nextHoliday = () => {
    setSelected((oldValue) => {
      if (oldValue + 1 === data.data.length) {
        //se il valore attuale è uguale all'ultimo dell'array di dati, passa al primo elemento
        return 0;
      } else {
        return oldValue + 1;
      }
    });
  };

  const prevHoliday = () => {
    setSelected((oldValue) => {
      if (oldValue - 1 < 0) {
        //se il valore attuale è inferiore a zero torna al penultimo elemento dell'array
        return data.data.length - 1;
      } else {
        return oldValue - 1;
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  if (data.success) {
    return (
      <div>
        {data.data.length > 0 ? (
          <SingleHoliday
            {...data.data[selected]}
            nextHoliday={nextHoliday}
            prevHoliday={prevHoliday}
          ></SingleHoliday>
        ) : (
          <h3>Nessuna vacanza, vai a lavorare!</h3>
        )}
      </div>
    );
  } else {
    return <div>...Loading</div>;
  }
};

export default Holiday;
