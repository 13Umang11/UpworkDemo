import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/onBoarding/Profile';
import CustomTabBar from '../assets/components/CustomTabBar';

const Tab = createBottomTabNavigator();

export function BottomNavigation({route}) {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
