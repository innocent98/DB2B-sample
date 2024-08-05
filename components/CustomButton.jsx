/* eslint-disable react-native/no-inline-styles */
import {Text, Pressable} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import ScreenSize from './ScreenSize';

const CustomButton = props => {
  const {itemHeight, itemWidth} = ScreenSize();

  return (
    <Pressable
      onPress={props.onPress}
      style={{
        backgroundColor: COLORS.button,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: itemHeight * 0.05,
        borderRadius: 6,
      }}>
      <Text style={{color: COLORS.white, fontSize: itemWidth * 0.035}}>
        {props.buttonText}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
