import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.confiq";

const auth = getAuth(app);

 export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    const createdUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = ()=>{
      return signOut(auth)
      
    }
    useEffect(()=>{
         const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user in the auth state change :',currentUser);
            setUser(currentUser);
            setLoading(false)
          })
          return ()=>{
            unSubscribe();
          }
    },[])
    const userInfo = {
         user,
         loading,
         createdUser,
         logOut,
         login
    }
    return (
       <AuthContext.Provider value={userInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;