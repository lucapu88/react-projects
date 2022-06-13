import React from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useGlobalContext } from '../context/context';

const CartItem = ({ _id, name, image, price, quantity, countInStock }) => {
  const { deleteItem, increaseQuantity, decreaseQuantity } = useGlobalContext();

  return (
    <article className="cart-item">
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <p className="prd-name">{name}</p>
      <div className="qty-selector">
        {/* IL TIZIO CHE HA CREATO L'ESERCIZIO HA MESSO countInStock = 0 NELL'API E NON HA FATTO TUTTA LA PARTE RELATIVA AL "SE NON CI SONO PRODOTTI". 
        SE N'È FREGATO ED HA MESSO 1 SCHIANTATO NEL REDUCER............L'HO IMPLEMENTATOQUI SOTTO */}
        <button
          className="btn icon-btn"
          disabled={countInStock === 0}
          onClick={() => {
            if (quantity !== countInStock) {
              increaseQuantity(_id);
            }
          }}
        >
          <BiPlus className="icon" />
        </button>
        <p> {countInStock > 0 ? quantity : '--'} </p>
        <button className="btn icon-btn" onClick={() => decreaseQuantity(_id)}>
          <BiMinus className="icon minus-icon" />
        </button>
      </div>
      <p>{price} €</p>
      <button className="btn icon-btn" onClick={() => deleteItem(_id)}>
        <MdDelete className=" icon minus-icon" />
      </button>
    </article>
  );
};

export default CartItem;
