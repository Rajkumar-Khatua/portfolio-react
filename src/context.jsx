import { createContext, useReducer } from "react";

export  const ThemedContext = createContext();

const INTIAL_STATE = {
    darkMode: false,
}
const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return {
                ...state,
                darkMode: !state.darkMode,
            };
        default:
            return state;
    }
}

export const ThemedProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, INTIAL_STATE);
    return (
        <ThemedContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemedContext.Provider>
    )
}