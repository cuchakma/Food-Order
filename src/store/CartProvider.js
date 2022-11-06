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
    let updatedItem;
    let totalAmount = 0;

    if( action.type === 'add-item' ) {
        const existingitemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem  = state.items[existingitemIndex];
        
        if( existingCartItem ){
            updatedItem = {
                ...existingCartItem,
                amount:existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingitemIndex] = updatedItem;
            
            for( let item of updatedItems ) {
                totalAmount += item.price * item.amount;
            }

            updatedTotalAmount = totalAmount;
        } else {
            updatedItems       = state.items.concat(action.item);
            updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount; 
        }

        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };

    }

    if( action.type === 'remove-item' ) {
        let existingitemIndex;
        let newNode;
        updatedItems       = [...state.items];
        updatedTotalAmount = state.totalAmount.toFixed(2);

        existingitemIndex  = updatedItems.findIndex((value) => {
            return value.id === action.id;
        });

        if( existingitemIndex !== -1 ) {
            newNode = {
                ...updatedItems[existingitemIndex],
                amount:updatedItems[existingitemIndex].amount - 1
            }

            updatedItems[existingitemIndex] = newNode;

            updatedTotalAmount -= updatedItems[existingitemIndex].price

            return {
                items:updatedItems,
                totalAmount:updatedTotalAmount
            }
        }
    }

    
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
            type:'remove-item',
            id:id
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