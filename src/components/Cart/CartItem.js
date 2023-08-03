import React from 'react';
import classes from '../styles/CartItem.module.css';

const CartItem = ( { dispatcher, item } ) => {
  const { id, price, name, amount } = item;
  const itemPrice                   = `$${price.toFixed(2)}`;

  function removeItem(type, id) {
    dispatcher({type:type, id:id})
  }

  function addItem(type, item){
    dispatcher({type:type, item:item})
  }

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
        <button onClick={() => dispatcher({type:'remove-item', id:id})}>−</button>
        <button onClick={() => dispatcher({type:'add-item', item})}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
