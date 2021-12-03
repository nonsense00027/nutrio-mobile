import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import firestore from '@react-native-firebase/firestore';
import {collectIdsAndDocs} from '../shared/utilities';
import {useAuthContext} from './AuthContext';

const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  const {user} = useAuthContext();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    firestore()
      .collection('profile')
      .doc(user.id)
      .collection('records')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => {
        setRecords(snapshot.docs.map(doc => collectIdsAndDocs(doc)));
      });
  }, []);

  const getPlan = category => {
    if (records && records.length > 0) {
      const result = records[0].cardix
        .map(item => {
          if (item[category]) {
            return item;
          } else {
            return;
          }
        })
        .filter(item => item !== undefined);
      return result;
    } else {
      return [];
    }
  };

  const payload = useMemo(() => ({records, getPlan}), [records]);
  return (
    <UserContext.Provider value={payload}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
