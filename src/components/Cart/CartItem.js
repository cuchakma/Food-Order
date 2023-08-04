import React from 'react';
import classes from '../styles/CartItem.module.css';

const CartItem = ( { dispatcher, item } ) => {
  const { id, price, name, amount } = item;
  const itemPrice                   = `$${price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{itemPrice}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => dispatcher({type:'update-item', id:id, qty:-1})}>−</button>
        <button onClick={() => dispatcher({type:'update-item', id:id, qty:1})}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
