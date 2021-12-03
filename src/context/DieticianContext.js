import React, {createContext, useContext, useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {collectIdsAndDocs} from '../shared/utilities';

export const DieticianContext = createContext();

export const DieticianProvider = ({children}) => {
  const [dieticians, setDieticians] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = firestore()
      .collection('dieticians')
      .onSnapshot(querySnapshot => {
        setDieticians(querySnapshot.docs.map(doc => collectIdsAndDocs(doc)));
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  return (
    <DieticianContext.Provider
      value={{
        dieticians,
      }}>
      {children}
    </DieticianContext.Provider>
  );
};

export const useDieticianContext = () => useContext(DieticianContext);
