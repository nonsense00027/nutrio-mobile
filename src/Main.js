import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthRoute} from './routes/AuthRoute';
import LoadingScreen from './components/LoadingScreen';
import {useAuthContext} from './context/AuthContext';
import {HomeRoute} from './routes/HomeRoute';
import {UserContextProvider} from './context/UserContext';

const getScreen = user => {
  if (user) {
    return (
      <UserContextProvider>
        <HomeRoute />
      </UserContextProvider>
    );
  } else {
    return <AuthRoute />;
  }
};
export default function Main() {
  const {user, authLoading} = useAuthContext();

  if (authLoading) {
    return <LoadingScreen />;
  }

  return <View style={styles.main}>{getScreen(user)}</View>;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // paddingTop: 20,
  },
});
