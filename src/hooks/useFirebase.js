import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken } from "firebase/auth";
import initializeFirebase from '../firebase/firebase.init';
const axios = require('axios').default;




initializeFirebase();
const useFirebase = () => {
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [status, setStatus] = useState('Pending');
    const [role, setRole] = useState('User');
    const [token, setToken] = useState('')


    // observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [auth]);

    const provider = new GoogleAuthProvider();


    // google login/signup
    const googleLogin = () => {
        return signInWithPopup(auth, provider)

    }
    // email registration function
    const emailRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // set user's name
    const updateDisplayName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        }).catch((error) => {
        });
    }


    // email login function
    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };


    // logout user
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            setError(error)
        });
    };


    // save user to database
    const handleUserSave = (name, email) => {
        const userData = { name: name, email: email, role: role };
        axios.post("http://localhost:5000/users", userData)
            .then()
    }

    // save user to DB when user login with Google
    const handleUserSaveGoogle = (name, email) => {
        const userData = { name: name, email: email, role: role };
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
    }



    return {
        user, setUser,
        error, setError,
        isLoading, setIsLoading,
        emailRegistration,
        token,
        emailLogin,
        googleLogin,
        logout,
        handleUserSave,
        handleUserSaveGoogle,
        updateDisplayName,
        status, setStatus
    };
};

export default useFirebase;