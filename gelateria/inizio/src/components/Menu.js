import React, { useState, useEffect } from 'react';
import Gelato from './Gelato';
import axios from 'axios';
import data from '../fakeData';

const url = 'https://react--course-api.herokuapp.com/api/v1/data/gelateria';

const Menu = () => {
  //con l'utilizzo di dati mockati
  /*const [products, setProducts] = useState(data);
  const category = Array.from(new Set(products.map((el) => el.categoria)));
  category.unshift('All');
  const [productFiltered, setProductFiltered] = useState(products);*/

  //con l'utilizzo di dati fetchati
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [productFiltered, setProductFiltered] = useState([]);

  const [selected, setSelected] = useState(0);

  const filterProducts = (category, index) => {
    setSelected(index);
    category === 'All'
      ? setProductFiltered(data)
      : setProductFiltered(
          products.filter((pr) => (pr.categoria === category ? pr : ''))
        );
  };

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(url); //effettuo la chiamata

      setProducts(response.data.data); //imposto i prodotti

      setProductFiltered(response.data.data); //imposto i prodotti filtrati

      const category = Array.from(
        new Set(response.data.data.map((el) => el.categoria))
      ); //creo un array eliminando i duplicati
      category.unshift('All'); //aggiungo a quell'array un elemento "All" all'inizio
      setCategory(category); //imposto le categorie

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      MENU
      {isLoading ? (
        <h2>...Loading</h2>
      ) : (
        <React.Fragment>
          <div className="lista-categorie">
            {category.map((cat, index) => {
              return (
                <button
                  key={index}
                  className={`btn ${index === selected && 'active'}`}
                  onClick={() => filterProducts(cat, index)}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <div className="vetrina">
            {productFiltered.map((p) => {
              return <Gelato key={p.id} {...p}></Gelato>;
            })}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Menu;
