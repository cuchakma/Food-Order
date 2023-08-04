import { useReducer } from "react";

const useGlobalStore = ( cartReducer, defaultCartState ) => {
    const [updatedCartState, dispatch] = useReducer(cartReducer, defaultCartState);
    return [updatedCartState, dispatch];
}

export default useGlobalStore;