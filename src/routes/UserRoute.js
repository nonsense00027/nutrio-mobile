import React, {useEffect, useRef} from 'react';
import {StyleSheet, SafeAreaView, View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Collab from '../screens/UserScreen/CollabScreen/Collab';
import Chats from '../screens/UserScreen/MessageScreen/Chats';
import {MessageRoute} from './MessageRoute';
import Profile from '../screens/UserScreen/ProfileScreen/Profile';
import Colors from '../shared/theme/Colors';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {CollabRoute} from './CollabRoute';
import {useAuthContext} from '../context/AuthContext';
import Waiting from '../screens/UserScreen/WaitingScreen/Waiting';
import Plan from '../screens/UserScreen/PlanScreen/Plan';

const Tabs = createBottomTabNavigator();

const animate1 = {
  0: {scale: 0.5, translateY: 0},
  0.92: {translateY: -30},
  1: {scale: 1.2, translateY: -20},
};
const animate2 = {
  0: {scale: 1.2, translateY: -20},
  1: {scale: 1, translateY: 0},
};

const circle1 = {
  0: {scale: 0},
  1: {scale: 1},
};

const circle2 = {
  0: {scale: 1},
  1: {scale: 0},
};

const TabBarButton = ({item, onPress, accessibilityState}) => {
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}>
      <Animatable.View
        style={styles.container}
        ref={viewRef}
        duration={350}
        easing="ease-out">
        <View style={styles.button}>
          <Animatable.View
            ref={circleRef}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: Colors.primary,
              borderRadius: 25,
            }}
            duration={350}
            easing="ease-in-out"
          />
          <Icon
            type={item.iconType}
            name={focused ? item.activeIcon : item.inactiveIcon}
            color={focused ? 'white' : '#999'}
            size={item.iconSize}
          />
        </View>

        <Animatable.Text
          ref={textRef}
          style={{fontSize: 10, color: Colors.primary, textAlign: 'center'}}>
          {item.name}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};
export const UserRoute = ({}) => {
  const {user} = useAuthContext();

  const getHome = () => {
    if (user.dietician) {
      if (user.pending) {
        return Waiting;
      } else {
        return Plan;
      }
    } else {
      return CollabRoute;
    }
  };
  const screens = [
    {
      name: 'Home',
      component: getHome(),
      iconType: 'entypo',
      activeIcon: 'heart',
      inactiveIcon: 'heart-outlined',
      iconSize: 26,
    },
    {
      name: 'Message',
      component: Chats,
      iconType: 'ionicon',
      activeIcon: 'chatbubble-ellipses-sharp',
      inactiveIcon: 'chatbubble-ellipses-outline',
      iconSize: 26,
    },
    {
      name: 'Profile',
      component: Profile,
      iconType: 'font-awesome-5',
      activeIcon: 'user-alt',
      inactiveIcon: 'user',
      iconSize: 20,
    },
  ];

  return (
    <Tabs.Navigator
      initialRouteName="Collab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 65,
        },
        tabBarActiveTintColor: Colors.primary,
      }}>
      {screens.map(item => (
        <Tabs.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: item.name,
            tabBarButton: props => <TabBarButton {...props} item={item} />,
          }}
        />
      ))}
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      // width: 0,
      //   height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 4,
  },
});
