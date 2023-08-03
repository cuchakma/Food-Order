import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from '../styles/HeaderCartButton.module.css';
import { useContext } from "react";
import cartContext from "../../store/cart-context";

const HeaderCartButton = ( { dispatcher } ) => {
    const { items }  = useContext(cartContext);

    let calculateTotalItems = items.length > 0 ? items.reduce((total, currentValue) => {
        return total + currentValue.amount;
    }, 0) : 0;

    return (
        <button className={classes.button} onClick={(e) => dispatcher({type:'modal-state-open'})}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {calculateTotalItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;