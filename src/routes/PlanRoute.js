import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Breakfast from '../screens/UserScreen/PlanScreen/Breakfast';
import {Icon} from 'react-native-elements';
import Colors from '../shared/theme/Colors';

const Tab = createMaterialTopTabNavigator();

export const PlanRoute = () => {
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
        name="Breakfast"
        component={Breakfast}
        initialParams={{category: 'breakfast'}}
        options={{
          tabBarIcon: () => <Icon type="feather" name="sun" size={12} />,
          unmountOnBlur: true,
          tabBarLabel: 'AM',
        }}
      />
      <Tab.Screen
        name="SnackAM"
        component={Breakfast}
        initialParams={{category: 'snacksAm'}}
        options={{
          tabBarIcon: () => (
            <Icon type="ionicon" name="fast-food-sharp" size={12} />
          ),
          tabBarShowLabel: false,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Lunch"
        component={Breakfast}
        initialParams={{category: 'lunch'}}
        options={{
          tabBarIcon: () => (
            <Icon type="ionicon" name="ios-partly-sunny-outline" size={12} />
          ),
          unmountOnBlur: true,
          tabBarLabel: 'NN',
        }}
      />
      <Tab.Screen
        name="SnackPM"
        component={Breakfast}
        initialParams={{category: 'snacksPm'}}
        options={{
          tabBarIcon: () => (
            <Icon type="ionicon" name="fast-food-sharp" size={12} />
          ),
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarStyle: {
            paddingHorizontal: 0,
            margin: 0,
          },
          tabBarContentContainerStyle: {
            padding: 0,
            margin: 0,
          },
        }}
      />
      <Tab.Screen
        name="Dinner"
        component={Breakfast}
        initialParams={{category: 'supper'}}
        options={{
          tabBarIcon: () => <Icon type="feather" name="moon" size={12} />,
          unmountOnBlur: true,
          tabBarLabel: 'PM',
        }}
      />
    </Tab.Navigator>
  );
};
