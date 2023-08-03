import React from "react";
import classes from '../styles/Cart.module.css';
import CartItem from "./CartItem";
import cartContext from "../../store/cart-context";
import { useContext } from "react";

const CartList = ( { dispatcher } ) => {
    const { items } = useContext( cartContext );

    return <ul className={classes['cart-items']}>
                {
                    items.length > 0 && items.map((item, index) => item.amount > 0 ? <CartItem item={item} key={index} dispatcher={dispatcher}/> : '')
                }
            </ul>;
}

export default CartList;