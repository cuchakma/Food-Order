import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartItem from './CartItem';
import cartContext from '../../store/cart-context';


const Cart = (props) => {
    const itemState             = useContext(cartContext);
    const Items                 = itemState.items;
    const hasItems              = itemState.items.length > 0;
    const totalAmount           = `$${itemState.totalAmount.toFixed(2)}`;
    const cartItemRemoveHandler = (id) => {
        itemState.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        itemState.addItem({...item, amount:1});
    };

    let cartItems = <ul className={classes['cart-items']}>{
        Items.map((item) => {
            if( item.amount > 0 ) {
                return <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
            }
        }
    )}</ul>;
    
    return (
        <Modal onClick={props.onClick}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClick}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>    
    );
}

export default Cart;