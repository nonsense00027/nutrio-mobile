import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/AuthScreen/Welcome';
import Login from '../screens/AuthScreen/Login';
import Register from '../screens/AuthScreen/Register';
import {SafeAreaView} from 'react-native-safe-area-context';
import Collab from '../screens/UserScreen/CollabScreen/Collab';
import Physician from '../screens/UserScreen/CollabScreen/Physician';

const Stack = createStackNavigator();

export const CollabRoute = ({}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
        initialRouteName="Collab">
        <Stack.Screen
          // options={{
          //   header: () => null,
          // }}
          name="Collab"
          component={Collab}
        />
        <Stack.Screen
          // options={{
          //   header: () => null,
          // }}
          name="Physician"
          component={Physician}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
