import React from "react";
import classes from '../../styles/MealItemForm.module.css'
import Input from "../../UI/Input";
import { useRef, useState } from "react";
import { defaultState } from "../../../store/defaultState";
import cartContext from "../../../store/cart-context";
import dispatchContext from "../../../store/dispatch-context";
import { useContext } from "react";

const MealItemForm = ( { id, price, name, description } ) => {
    const { amountIsValid } = useContext(cartContext);
    const  dispatcher       = useContext(dispatchContext);
    const amountInputRef    = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatcher({type:'amount-validation', amountRef:amountInputRef});
        amountIsValid && dispatcher({type:'add-item', item:{ id:id, name:name, amount:parseInt(amountInputRef.current.value), price:price }})
    };

    return (
        <form className={classes.form} onSubmit={(e) => submitHandler(e)}>
            <Input 
                ref={amountInputRef}
                label="Amount" 
                input={{
                    id:'amount_'+id,
                    type:'number',
                    min:1,
                    max:5,
                    step:1,
                    defaultValue:0
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please Enter A Valid Amount (1-5). </p>}
        </form>  
    );
};

export default MealItemForm;