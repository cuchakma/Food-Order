import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from '../../styles/MealItem.module.css';
import dispatchContext from "../../../store/dispatch-context";


const MealItem = ( { price, id, name, description } ) => {
    const itemPrice = `$${price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{itemPrice}</div>
            </div>
            <div>
                <MealItemForm id={id} price={price} name={name} description={description}/>
            </div>
        </li>
    );
}

export default MealItem;