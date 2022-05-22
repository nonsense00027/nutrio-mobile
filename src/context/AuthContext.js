import React, {createContext, useContext, useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [error, setError] = useState(null);
  // auth().signOut();
  const handleError = err => {
    switch (err.code) {
      case 'auth/invalid-email':
        setError('Invalid email address.');
        break;
      case 'auth/wrong-password':
        setError('Invalid password.');
        break;
      case 'auth/user-not-found':
        setError('Account not found.');
        break;
      default:
        setError('Something went wrong, please try again.');
    }
  };
  useEffect(() => {
    auth().onAuthStateChanged(authUser => {
      console.log('auth user: ', authUser);
      if (authUser != null) {
        firestore()
          .collection('profile')
          .doc(authUser.uid)
          .onSnapshot(doc => {
            setUser({id: authUser.uid, ...doc?.data()});
            setAuthLoading(false);
            Keyboard.dismiss(0);
          });
      } else {
        setUser(null);
        setAuthLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 3000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const login = (email, password) => {
    console.log('logging in');
    setAuthLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log('login success');
        // setAuthLoading(false);
      })
      .catch(err => {
        console.log('error: ', err);
        handleError(err);
        setAuthLoading(false);
      });
  };

  const logout = () => {
    auth().signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authLoading,
        error,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
