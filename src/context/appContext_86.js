import React,{useReducer,useContext} from 'react';

import reducer_86 from './reducer_86'

import { DISPLAY_ALERT,CLEAR_ALERT } from './action_86';

const initialState={
    isLoading:false,
    showAlert:false,
    alertText:'',
    alertType:'',

}

const AppContext_86 = React.createContext();

const AppProvider_86= ({children})=>{

    const[state,dispatch]=useReducer(reducer_86,initialState);

    const displayAlert=()=>{
        dispatch({type:DISPLAY_ALERT});
        clearAlert();
    }
    const clearAlert=()=>{
        setTimeout(()=>{
            dispatch({type:CLEAR_ALERT})
        },3000);
    }

    return(
        
        <AppContext_86.Provider value={{...state,displayAlert,clearAlert}}>
        {children}
        </AppContext_86.Provider>

    )

}

const useAppContext=()=>{
    return useContext(AppContext_86);
}

export{AppProvider_86,initialState,useAppContext}