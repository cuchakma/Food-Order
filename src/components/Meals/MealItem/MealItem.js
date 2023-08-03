import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from '../../styles/MealItem.module.css';


const MealItem = ( { price, id, name, description, dispatcher } ) => {
    const itemPrice = `$${price.toFixed(2)}`;


    const addToCartHandler = (enteredAmount) => {
        dispatcher({type:'add-item',item:{
            id:id,
            name:name,
            amount:enteredAmount,
            price:price
        }});
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{itemPrice}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={id}/>
            </div>
        </li>
    );
}

export default MealItem;