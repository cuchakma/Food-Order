import cartContext from "./cart-context";

const CartProvider = ( {children, state} ) => {
    return ( <cartContext.Provider value={state}>{children}</cartContext.Provider> );
};

export default CartProvider;