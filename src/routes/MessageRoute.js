import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import Chats from '../screens/UserScreen/MessageScreen/Chats';
import Chat from '../screens/UserScreen/MessageScreen/Chat';

const Stack = createStackNavigator();

export const MessageRoute = ({}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
        initialRouteName="Chats">
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
