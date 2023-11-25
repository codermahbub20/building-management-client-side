/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

import useAxiosRandom from "../Components/hooks/useAxiosRandom";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()



const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const axiosRandom = useAxiosRandom()


  // user created 
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // user login
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Google sign in
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  //   Profile update related
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // user log out
  const logOut = async () => {
    setLoading(true)
    // await clearCookie()
    return signOut(auth)
  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('CurrentUser-----', currentUser)

      if (currentUser) {
        const userInfo = { email: currentUser.email }
        //
        axiosRandom.post('/jwt', userInfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('access token', res.data.token)
            }
          })
      } else {
        //
        localStorage.removeItem('access token')
      }

      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [axiosRandom])


  const AuthInfo = {
    user,
    createUser,
    signIn,
    logOut,
    signInWithGoogle,
    updateUserProfile,
    loading
  }

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;