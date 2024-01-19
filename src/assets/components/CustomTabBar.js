import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {SvgImg} from './SvgImg';
import {colors} from '../constant/colors';
import {
  drive,
  message,
  pie,
  profileCircle,
  tickCircle,
  vector,
} from '../icons/imgIndex';
import Profile from '../../screens/onBoarding/Profile';

export default function CustomTabBar({state, descriptors, navigation}) {
  const [tabIndex, setTabIndex] = useState(2);
  const bottomMenu = [
    {
      key: 1,
      name: 'screen1',
      component: null,
      icon: pie,
      activeIcon: pie,
    },

    {
      key: 2,
      name: 'screen2',
      component: null,
      icon: drive,
      activeIcon: drive,
    },
    {
      key: 3,
      name: 'Profile',
      component: Profile,
      icon: profileCircle,
      activeIcon: profileCircle,
    },
    {
      key: 4,
      name: 'screen4',
      component: null,
      icon: message,
      activeIcon: message,
    },
    {
      key: 5,
      name: 'screen5',
      component: null,
      icon: tickCircle,
      activeIcon: tickCircle,
    },
  ];

  const onPress = (item, index) => {
    setTabIndex(index);
  };

  return (
    <View
      style={{
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 12,
      }}>
      {bottomMenu.map((route, index) => {
        return (
          <>
            <TouchableOpacity
              key={index}
              onPress={() => onPress(route, index)}
              style={{
                backgroundColor:
                  tabIndex == index ? colors.themeColor : colors.white,
                padding: 20,
                borderRadius: 50,
              }}>
              <SvgImg
                iconName={tabIndex == index ? route?.activeIcon : route?.icon}
                size={25}
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
          </>
        );
      })}
    </View>
  );
}
