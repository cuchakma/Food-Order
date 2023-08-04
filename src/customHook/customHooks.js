import { useReducer } from "react";
import { defaultState } from "../store/defaultState";
import { cartReducer } from "../store/cartReducer";

export const useGlobalStore = () => {
    const  [updatedCartState, dispatcher]  = useReducer(cartReducer, defaultState);
    return [updatedCartState, dispatcher];
}