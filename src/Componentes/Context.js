import React from 'react'
import { createContext } from "react";
export const contexto = createContext()
const { Provider } = contexto

const ContextProvider = ({children}) => {
    
    const contextValue = {
        
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default ContextProvider