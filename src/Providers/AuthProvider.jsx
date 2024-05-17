import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const googleAuth = new GoogleAuthProvider()
    const facebookAuth = new FacebookAuthProvider()

    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
       return ()=>{
        return unSubscribe()
       }
    },[])

    const signInHandler =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleAuth)
    }
    const signInWithFacebook =()=>{
        setLoading(true)
        return signInWithPopup(auth,facebookAuth)
    }
    const signInWithLinkedIn =()=>{
        
    }

    const registerHandler = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateHandler = (data)=>{
        setLoading(true)
        return updateProfile(auth,data)
    }

    const logOutHandler = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authHandlers = {signInHandler,updateHandler,registerHandler,logOutHandler,loading,setLoading,user,signInWithGoogle,signInWithLinkedIn,signInWithFacebook}
    return (
        <AuthContext.Provider value={authHandlers}>
                {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;