import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {getAuth} from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({name:'John Machlauring', email:'mac@gmail.com'})

    const AuthInfo = {user}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;