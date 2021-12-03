import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/AuthScreen/Welcome';
import Login from '../screens/AuthScreen/Login';
import Register from '../screens/AuthScreen/Register';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UserRoute} from './UserRoute';
import {MessageRoute} from './MessageRoute';
import Chat from '../screens/UserScreen/MessageScreen/Chat';
import Info from '../screens/UserScreen/InfoScreen/Info';

const Stack = createStackNavigator();

export const HomeRoute = ({}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => null,
          }}
          initialRouteName="User">
          <Stack.Screen name="User" component={UserRoute} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen
            name="Info"
            component={Info}
            options={{presentation: 'modal'}}
          />
          {/* <Stack.Screen name="Call" component={Calls} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
