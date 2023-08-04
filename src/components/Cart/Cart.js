import Modal from '../UI/Modal';
import { useContext } from 'react';
import cartContext from '../../store/cart-context';
import dispatchContext from '../../store/dispatch-context';
import CartList from './CartList';
import classes from '../styles/Cart.module.css';

const Cart = () => {
    const { items, totalAmount } = useContext(cartContext);
    const dispatcher             = useContext(dispatchContext);
    const hasItems               = items?.length > 0;
    const amount                 = `$${totalAmount?.toFixed(2)}`;

    return (
        <Modal>
            <CartList/>
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