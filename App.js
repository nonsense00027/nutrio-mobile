import React from 'react';
import MainScreen from './src/Main';
import {AuthProvider} from './src/context/AuthContext';
import {DieticianProvider} from './src/context/DieticianContext';

export default function App() {
  return (
    <AuthProvider>
      <DieticianProvider>
        <MainScreen />
      </DieticianProvider>
    </AuthProvider>
  );
}
