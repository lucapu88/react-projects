import React, { useState, useEffect } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';
import { v4 as uuidv4 } from 'uuid';

const ColorGrading = () => {
  const [selectedColor, setSelectedColor] = useState([]);
  const [colorInput, setColorInput] = useState({
    color: '',
    quantity: 10,
  });
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (colorInput.color && colorInput.quantity) {
      try {
        const { color, quantity } = colorInput;
        const quantityRounded = Math.round(100 / parseInt(quantity, 10)) * 2;

        setSelectedColor(new Values(color).all(quantityRounded));
      } catch (error) {
        setIsError(true);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColorInput({ ...colorInput, [name]: value });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>Inserisci un colore in formato HEX (es.:#CC0000):</label>
        <input
          className="input"
          type="text"
          name="color"
          id="color"
          maxLength={7}
          onChange={handleChange}
          value={colorInput.color}
        ></input>

        <label>Scegli quanti tipi di sfumature vuoi:</label>
        <input
          className="input"
          type="number"
          name="quantity"
          id="quantity"
          max="100"
          min="10"
          step="5"
          onChange={handleChange}
          value={colorInput.quantity}
        ></input>
        <button type="submit" className="btn">
          Visualizza
        </button>
      </form>

      {isError ? (
        <div>
          <h2 style={{ color: 'red' }}>
            Scemo! devi mettere un colore valido!{' '}
          </h2>
          <h3>ora ricarica la pagina e riprova.</h3>
        </div>
      ) : selectedColor.length ? (
        <div
          style={{
            backgroundColor:
              colorInput.color === '#063497' ? '#C4181E' : '#063497',
          }}
        >
          {selectedColor.map((e) => {
            return <SingleColor key={uuidv4()} {...e}></SingleColor>;
          })}
        </div>
      ) : (
        <h2>...Loading</h2>
      )}
    </div>
  );
};

export default ColorGrading;
