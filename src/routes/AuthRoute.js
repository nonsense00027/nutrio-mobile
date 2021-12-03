import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/AuthScreen/Welcome';
import Login from '../screens/AuthScreen/Login';
import Register from '../screens/AuthScreen/Register';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export const AuthRoute = ({}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => null,
          }}
          initialRouteName="Welcome">
          <Stack.Screen
            // options={{
            //   header: () => null,
            // }}
            name="Welcome"
            component={Welcome}
          />
          <Stack.Screen
            // options={{
            //   header: () => null,
            // }}
            name="Login"
            component={Login}
          />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
