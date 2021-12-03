import React, {useEffect} from 'react';
import MainScreen from './src/Main';
import {AuthProvider} from './src/context/AuthContext';
import {View, Text} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {DieticianProvider} from './src/context/DieticianContext';

export default function App() {
  useEffect(() => {
    (async () => {
      const token = await messaging().getToken();
      console.log('token is: ', token);
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    })();
  }, []);
  return (
    <AuthProvider>
      <DieticianProvider>
        <MainScreen />
      </DieticianProvider>
    </AuthProvider>
  );
}
