import {StatusBar} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';

const FocusedStatusBar = props => {
  return (
    <StatusBar
      barStyle={'dark-content'}
      backgroundColor={COLORS.white}
      {...props}
    />
  );
};

export default FocusedStatusBar;
