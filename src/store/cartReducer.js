import { calculateTotal } from "../customHook/helper";

export const cartReducer = (state, action) => {
    let { item, type, id, qty, modalState, amountRef }  = action;
    let { items }                = state;

    if( type === 'add-item' ) {
        let foundIndex = items.findIndex((currentItem) => {
            return currentItem?.id === item?.id
        });

        if( foundIndex === -1 ) {
            items.push(item);
        } else {
            items[foundIndex].amount = items[foundIndex]?.amount + item?.amount;
        }

        return {...state, items, totalAmount:calculateTotal(items) };
    }

    if( type === 'update-item' ) {
        let foundIndex = items.findIndex((currentItem) => {
            return currentItem.id === id;
        });

        items[foundIndex].amount = items[foundIndex]?.amount + qty;

        items = items.filter((currentItem) => {
            return currentItem?.amount > 0
        } );

        return { ...state, items, totalAmount:calculateTotal(items) };
    }

    if( type === 'amount-validation' ){
        if( amountRef.current.value <= 0 || amountRef.current.value > 5 ) {
            return {...state, amountIsValid:false}
        }
        return state;
    }

    if( type === 'modal-state-open' ) {
        return {...state, modalState:true};
    }

    if( type === 'cart-modal-close' ) {
        return {...state, modalState:false};
    }

    return {...state};
}