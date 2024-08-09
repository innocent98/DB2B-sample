import {Text} from 'react-native';
import React from 'react';

const CustomText = ({text, textStlye}) => {
  return <Text style={textStlye}>{text}</Text>;
};

export default CustomText;
