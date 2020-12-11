import React, { useReducer, useContext } from 'react'

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

const initState = {
    user: {
        isLogged: false,
        login: null,
        password: null
    },
    availableUsers: [
        { login: 'test', password: '3434' },
        { login: 'tes2t', password: '34343' },
        { login: 'test2', password: '34343' },
    ]
};

function appStateReducer(state, action) {
    switch (action.type) {
        case 'login': {
            return { ...state, user: { isLogged: true, login: action.login, password: action.password, id: action.id, name: action.name, surname: action.surname, city: action.city } }
        }
        case 'logout': {
            return { ...state, user: { isLogged: false, login: null } }
        }
    }
}

function AppProvider({ children }) {

    const [state, dispatch] = useReducer(appStateReducer, initState);

    return <>
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    </>
}

function useAppState() {
    return useContext(AppStateContext);
}

function useAppDispatch() {
    return useContext(AppDispatchContext);
}

export { AppProvider, useAppState, useAppDispatch }
