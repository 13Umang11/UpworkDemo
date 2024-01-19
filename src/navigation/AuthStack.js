import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/security/SignIn';
import SignUp from '../screens/security/SignUp';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, unmountOnBlur: true}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
