import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword,updateProfile,
    onAuthStateChanged,signInWithEmailAndPassword, signOut } from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [status, setStatus] = useState(false)
    const [loading, setLoading] = useState(true)

    const createPasswordBasedUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const updateUser = (profile) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const Logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const LoginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            }
            else{
                setUser({})
                setLoading(false)
            }
        })

        return () => unsubscribe()
    },[status])

    const AuthInfo = {user, loading,createPasswordBasedUser, updateUser, Logout, LoginUser,status, setStatus}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;