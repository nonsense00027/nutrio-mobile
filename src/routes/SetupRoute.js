import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Information from '../screens/SetupScreen/Information';
import Bmi from '../screens/SetupScreen/SubjectiveData/Bmi';
import Reduce from '../screens/SetupScreen/SubjectiveData/Reduce';
import Intake from '../screens/SetupScreen/SubjectiveData/Intake';
import Severly from '../screens/SetupScreen/SubjectiveData/Severly';
import Objective from '../screens/SetupScreen/Objective';

const Stack = createStackNavigator();

export const SetupRoute = ({}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => null,
            cardStyle: {
              backgroundColor: '#fff',
            },
            animationEnabled: false,
          }}
          initialRouteName="Information">
          <Stack.Screen name="Information" component={Information} />
          <Stack.Screen name="Bmi" component={Bmi} />
          <Stack.Screen name="Reduce" component={Reduce} />
          <Stack.Screen name="Intake" component={Intake} />
          <Stack.Screen name="Severly" component={Severly} />
          <Stack.Screen name="Objective" component={Objective} />
          {/* <Stack.Screen name="Age" component={Age} />
          <Stack.Screen name="Height" component={Height} />
          <Stack.Screen name="Weight" component={Weight} />
          <Stack.Screen name="Semester" component={Semester} />
          <Stack.Screen name="Lifestyle" component={Lifestyle} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
