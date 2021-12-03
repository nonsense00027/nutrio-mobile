import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Breakfast from '../screens/UserScreen/PlanScreen/Breakfast';
import {Icon} from 'react-native-elements';
import Colors from '../shared/theme/Colors';
import Information from '../screens/UserScreen/ProfileScreen/Information';

const Tab = createMaterialTopTabNavigator();

export const ProfileRoute = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors.primary,
        },
        tabBarLabelStyle: {
          // fontSize: 9,
          margin: 0,
          padding: 0,
        },
        tabBarItemStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarIconStyle: {
          margin: 0,
          padding: 0,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarPressColor: '#eee',
      }}>
      <Tab.Screen
        name="ProfileInfo"
        component={Information}
        // initialParams={{category: 'breakfast'}}
        options={{
          tabBarIcon: () => <Icon type="antdesign" name="user" size={12} />,
          unmountOnBlur: true,
          //   tabBarLabel: 'AM',
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen
        name="Records"
        component={Information}
        // initialParams={{category: 'snacksAm'}}
        options={{
          tabBarIcon: () => <Icon type="antdesign" name="profile" size={12} />,
          //   tabBarShowLabel: false,
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};
