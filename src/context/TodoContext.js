import React, {createContext, useContext, useReducer} from React;

export const TodoLayerContext = useContext();

export const TodoLayer = ({initialState, reducer, children}) => (
    <TodoLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </TodoLayerContext.Provider>
)
export const useTodoLayerValue = () => useContext(TodoLayerContext)