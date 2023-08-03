export const cartReducer = (state, action) => {
    let { item, type, id }  = action;

    if( type === 'add-item' ) {
        let { items } = state;

        //Update The Item List Accordingly
        if( items.length > 0 ) { // when item exists on the item list, run this condition
            let foundValue = items.find((currentValue) => {
                return currentValue?.id === item?.id // find the same value if found from the item list
            });
            
            if( foundValue !== undefined ) { // update the amount/qty of the same item found
                foundValue.amount = foundValue?.amount + item?.amount; 
            } else { // if a new item is found, then add it to items list
                items.push(item);
            }
        } else {  // when item does not exist on the item list, run this condition
            items.push(item);
        }

        //update the total amount
        let defaultAmount = 0;
        let totalAmount = items.reduce((previousValue, currentValue) => {
             return previousValue + ( currentValue?.amount * currentValue?.price );
        }, defaultAmount);
        
        return {...state, items, totalAmount};
    }

    if( type === 'remove-item' ) {
        let { items } = state;

        //updated the item amount
        let updated = items.filter((value) => {
            if( value?.id === id ) {
                value.amount = value?.amount - 1;
                if( value.amount > 0 ) {
                    return value;
                }
            }
            return value; 
        });
        
        //re-insert the updated items in the original items
        items = [...updated];

        //update the total
        let defaultAmount = 0;
        let totalAmount = items.reduce((previousValue, currentValue) => {
            return previousValue + ( currentValue?.amount * currentValue?.price );
        }, defaultAmount);

        return {...state, items, totalAmount};
    }

    if( action.type === 'modal-state-open' ) {
        return {...state, modalState: true}
    }

    if( action.type === 'cart-modal-close' ) {
        return {...state, modalState: false}
    }
}