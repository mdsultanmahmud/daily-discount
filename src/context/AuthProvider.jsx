import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword,updateProfile,
    onAuthStateChanged,signInWithEmailAndPassword, signOut } from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [status, setStatus] = useState(false)

    const createPasswordBasedUser = (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const updateUser = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const Logout = () =>{
        return signOut(auth)
    }

    const LoginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser({})
            }
        })

        return () => unsubscribe()
    },[status])

    const AuthInfo = {user, createPasswordBasedUser, updateUser, Logout, LoginUser,status, setStatus}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;