import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgImg} from './SvgImg';
import {profile, rightArrow} from '../icons/imgIndex';
import {colors} from '../constant/colors';

export default function ProfileCard({iconName, title}) {
  return (
    <TouchableOpacity style={{marginHorizontal: 20, marginTop: 20}}>
      <View
        style={{
          backgroundColor: colors.CardColor,
          borderWidth: 1,
          borderColor: colors.CardBorderColor,
          padding: 15,
          borderRadius: 15,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <SvgImg iconName={iconName} size={28} />
          <Text style={{marginHorizontal: 10, fontWeight: '400', fontSize: 16}}>
            {title}
          </Text>
        </View>
        <View style={{justifyContent: 'flex-end'}}>
          <SvgImg iconName={rightArrow} size={28} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
