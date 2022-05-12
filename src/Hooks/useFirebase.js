import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    // ACCOUNT CREATE WITH EMAIL AND PASS

    const  createAccountWithMail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // LOGIN WITH EMAIL AND PASS
    const loginWithEmailAndPassword =( email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // SIGN  IN WITH GOOGLE
    const signInUsingGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
        .catch((error) => {
            setError(error.message);
        })
        .finally( () => setLoading(false));
    };


    // USER OBSERVER 
    useEffect( () => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            } 
            setLoading(false);
        });
        return () => unSubscribed;
    }, [auth]);

    //  // SAVE USER TO DATABASE
    //  const saveUser = (displayName, email, method) => {
    //     const user = {displayName, email};
    //     // console.log(user)
        
    //     fetch('https://secret-mountain-73898.herokuapp.com/users', {
    //         method: method,
    //         headers: {
    //             'content-type' : 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     .then()
    // };

    // LOGOUT
    const logOut = () => {
        setLoading(true);
        signOut(auth)
         .then(() => {
            setUser({});
          }).catch((error) => {
           setError(error.message);
          })
          .finally( () => setLoading(false));
    };

    return {
        user,
        setUser,
        error,
        setError,
        loading,
        setLoading,
        logOut,
        signInUsingGoogle,
        createAccountWithMail,
        loginWithEmailAndPassword
    }

}

export default useFirebase;
