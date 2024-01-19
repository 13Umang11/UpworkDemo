import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {colors} from '../constant/colors';
import {tick} from '../icons/imgIndex';
import {SvgImg} from './SvgImg';

export const CheckBox = ({
  check,
  setCheck,
  title,
  titleStyle,
  borderColor = colors.secondaryColor,
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCheck(!check)}
      style={{flexDirection: 'row'}}>
      <View
        style={{
          width: 20,
          height: 20,
          borderWidth: 1,
          borderRadius: 3,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: check ? colors.themeColor : borderColor,
          backgroundColor: check ? colors.themeColor : colors.white,
        }}>
        {check && (
          <View>
            <SvgImg iconName={tick} size={12} />
          </View>
        )}
      </View>
      <Text style={{marginLeft: 10, color: colors.black, ...titleStyle}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
