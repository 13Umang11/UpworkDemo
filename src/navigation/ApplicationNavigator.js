import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';
import {BottomNavigation} from './BottomNavigation';

const ApplicationNavigator = () => {
  const user = useSelector(state => state?.user);
  return (
    <NavigationContainer>
      {user?.Token ? <BottomNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
