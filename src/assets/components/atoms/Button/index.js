import {View, TouchableOpacity} from 'react-native';
import React from 'react';

export const Button = ({
  outline,
  ContainerStyle,
  onPress,
  WrapperIconAndTextStyle,
  children,
}) => {
  return outline ? (
    <TouchableOpacity style={ContainerStyle} onPress={onPress}>
      <View style={WrapperIconAndTextStyle}>{children}</View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={ContainerStyle} onPress={onPress}>
      <View style={WrapperIconAndTextStyle}>{children}</View>
    </TouchableOpacity>
  );
};

export const ButtonPrinter = ({ContainerStyle, children}) => {
  return <View style={ContainerStyle}>{children}</View>;
};
