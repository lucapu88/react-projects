import React from 'react';
import { MdRemoveShoppingCart } from 'react-icons/md';
import CartItem from './CartItem';
import { useGlobalContext } from '../context/context';

const Cart = () => {
  const { products, emptyCart } = useGlobalContext();

  return (
    <section className="section-center" style={{ marginTop: '2rem' }}>
      <div className="cart-info">
        <h6>Item</h6>
        <h6 className="prd-name">Nome</h6>
        <h6>Qty</h6>
        <h6>Prezzo</h6>
        <button className="btn icon-btn" onClick={emptyCart}>
          <MdRemoveShoppingCart className="icon minus-icon" />
        </button>
      </div>
      <hr />
      <section className="cart-section">
        {products.map((product) => {
          return <CartItem key={product._id} {...product}></CartItem>;
        })}
      </section>
    </section>
  );
};

export default Cart;
