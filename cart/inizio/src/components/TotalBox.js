import React from 'react';
import { useGlobalContext } from '../context/context';

const TotalBox = () => {
  const { total } = useGlobalContext();

  return (
    <section className="total-section section-center">
      <div className="card">
        <header className="card-header">
          <h4> Carrello </h4>
        </header>
        <hr />
        <div className="card-content">
          <h4>{total.toFixed(2)} €</h4>
        </div>
        <hr />
        <footer className="card-footer">
          <button className="btn btn-selector">CheckOut</button>
        </footer>
      </div>
    </section>
  );
};

export default TotalBox;
