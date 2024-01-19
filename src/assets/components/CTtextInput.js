import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {SvgImg} from './SvgImg';
import {colors} from '../constant/colors';

export default function CTtextInput({
  viewStyle,
  textInputStyle,
  iconName,
  size,
  onChangeText,
  value,
  secureTextEntry,
  placeholder = '',
  maxLength,
  keyboardType = 'default',
  error,
}) {
  return (
    <View style={{marginHorizontal: 20}}>
      <View
        style={{
          ...viewStyle,
          backgroundColor: colors.textInputColor,
          borderRadius: 5,
          overflow: 'hidden',
          elevation: 5,
          flexDirection: 'row',
        }}>
        <View
          style={{flex: 0.15, alignItems: 'center', justifyContent: 'center'}}>
          <SvgImg iconName={iconName} size={size} />
        </View>
        <TextInput
          style={{
            flex: 0.9,
            paddingHorizontal: 10,
            fontSize: 16,
            paddingVertical: 18,
            ...textInputStyle,
          }}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          keyboardType={keyboardType}
        />
      </View>
      {error !== '' ? (
        <Text style={{color: 'red', fontSize: 12, marginTop: 6}}>{error}</Text>
      ) : null}
    </View>
  );
}
