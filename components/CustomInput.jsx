import {TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import ScreenSize from './ScreenSize';

const CustomInput = ({placeholder, width, keyboardType, onChangeText, autoCapitalize, secureTextEntry}) => {
  const {itemHeight} = ScreenSize();

  return (
    <TextInput
      placeholder={placeholder}
      style={{
        padding: 6,
        borderWidth: 1,
        borderColor: COLORS.lightgray,
        borderRadius: 6,
        height: itemHeight * 0.05,
        width,
        color: COLORS.black,
      }}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default CustomInput;
