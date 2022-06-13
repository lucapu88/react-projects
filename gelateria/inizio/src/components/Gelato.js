import React from 'react';

const Gelato = ({ nome, img, decrizione, prezzo }) => {
  return (
    <article className="gelato">
      <img
        src={img}
        style={{ borderRadius: '15px', width: '250px', height: '250px' }}
      />
      <h3>{nome}</h3>

      {/*deScrizione: purtroppo il creatore dell'api ha fatto un errore di copia e incolla */}
      <p>{decrizione}</p>
      <p>{(prezzo / 100).toFixed(2)} €</p>
    </article>
  );
};

export default Gelato;
