import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import { useContext } from "react";
import cartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(cartContext);
    let totalItems   = 0;   

    for( let item of cartCtx.items ) {
        totalItems += item.amount;
    }
    
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {totalItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;