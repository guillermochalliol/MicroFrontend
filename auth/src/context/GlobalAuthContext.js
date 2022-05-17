import React, { createContext, useState, useEffect } from "react";
import { auth, db, signInWithGoogle, signIn, signUp, passwordReset, logOut } from '../data/firebase'


export const GlobalAuthContext = createContext()

export default function GlobalAuthContextProvider(props){
    const [user, setUser] = useState({});
    
    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, []);
    const authProv= { auth,
        db,
        signInWithGoogle,
        signIn,
        signUp,
        passwordReset,
        logOut, 
        user}
    return(
        <GlobalAuthContext.Provider value = {authProv}>
            {props.children}
        </GlobalAuthContext.Provider>
    )
}


