import classes from './Cart.module.css';
import Modal from '../UI/Modal';



const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[
        {
          id:1,
          name:'c1',
          amount:2,
          price:21.90  
        }
    ].map((item) => {
        return <li key={item.id}>{item.name}</li>;
    })}</ul>;

    return (
        <Modal onClick={props.onClick}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClick}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>    
    );
}

export default Cart;