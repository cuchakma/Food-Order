import React from "react";
import { useReducer } from "react";
import cartContext from "./cart-context";

const defaultCartState = {
    items:[],
    totalAmount:0
}

const cartReducer = (state, action) => {
    let updatedItems;
    let updatedTotalAmount;

    if( action.type === 'add-item' ) {
        const existingitem = state.items.findIndex((item) => item.id === action.item.id);

        if( existingitem !== -1 ) {
            updatedItems       = state.items;
            updatedTotalAmount = state.items[existingitem].price;
        } else {
            updatedItems       = state.items.concat(action.item);
            updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount; 
        }

    }

    if( action.type === 'remove-item' ) {

    }
    
    return {
        items:updatedItems,
        totalAmount:updatedTotalAmount
    };
};

const CartProvider = (props) => {

    const [updatedCartState, dispatch] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatch({
            type:'add-item',
            item:item
        });
    };

    const removeItemFromCartHandler = (id) => {
        dispatch({
            type:'remove-item'
        });
    };

    const CartContext = {
        items:updatedCartState.items,
        totalAmount:updatedCartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return ( <cartContext.Provider value={CartContext}>
            {props.children}
        </cartContext.Provider> );
};

export default CartProvider;