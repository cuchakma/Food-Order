import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import { useContext } from "react";
import cartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(cartContext);
    const items   = cartCtx.items.length;   
    
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {items}
            </span>
        </button>
    )
}

export default HeaderCartButton;