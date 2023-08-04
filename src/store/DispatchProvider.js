import React from "react";
import dispatchContext from "./dispatch-context";

const DispatchProvider = ( { state, children } ) => {
    return ( <dispatchContext.Provider value={state}>{children}</dispatchContext.Provider> );
}

export default DispatchProvider