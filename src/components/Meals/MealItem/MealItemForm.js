import React from "react";
import classes from '../../styles/MealItemForm.module.css'
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
    const amountInputRef = useRef();

    const [amountIsValid, setAmountIsValid] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = parseInt( amountInputRef.current.value );

        if( enteredAmount < 0 || enteredAmount > 5 ) {
            setAmountIsValid(true);
            return;
        }

        props.onAddToCart(enteredAmount);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label="Amount" 
                input={{
                    id:'amount_'+props.id,
                    type:'number',
                    min:1,
                    max:5,
                    step:1,
                    defaultValue:1
                }}
            />
            <button>+ Add</button>
            {amountIsValid && <p>Please Enter A Valid Amount (1-5). </p>}
        </form>  
    );
};

export default MealItemForm;