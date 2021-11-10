import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeFirebase from '../firebase/firebase.init';

initializeFirebase();
const useFirebase = () => {
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    // observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [])

    const provider = new GoogleAuthProvider();


    // google login/signup
    const googleLogin = () => {
        return signInWithPopup(auth, provider)

    }
    // email registration function
    const emailRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };


    // email login function
    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };


    // logout user
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return {
        user, setUser,
        error, setError,
        isLoading, setIsLoading,
        emailRegistration,
        emailLogin,
        googleLogin,
        logout
    };
};

export default useFirebase;