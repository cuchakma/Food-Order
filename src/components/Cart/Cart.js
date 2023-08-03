import Modal from '../UI/Modal';
import { useContext } from 'react';
import cartContext from '../../store/cart-context';
import CartList from './CartList';
import classes from '../styles/Cart.module.css';

const Cart = ( { dispatcher } ) => {
    const { items, totalAmount } = useContext(cartContext);
    const hasItems               = items?.length > 0;
    const amount                 = `$${totalAmount?.toFixed(2)}`;

    return (
        <Modal dispatcher={dispatcher}>
            <CartList dispatcher={dispatcher}/>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{amount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={() => dispatcher({type:'cart-modal-close', modalState:false})}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>    
    );
}

export default Cart;