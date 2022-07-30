import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export const Button = ({
  outline,
  buttonOutlineStyle,
  buttonStyle,
  onPress,
  children,
}) => {
  return outline ? (
    <TouchableOpacity style={[styles.buttonOutlineStyle, buttonOutlineStyle]} onPress={onPress}>
      <View style={styles.wrapperIconAndText}>{children}</View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={[styles.buttonStyle, buttonStyle]} onPress={onPress}>
      <View style={styles.wrapperIconAndText}>{children}</View>
    </TouchableOpacity>
  );
};

export const ButtonPrinter = ({ContainerStyle, children}) => {
  return (
    <View style={ContainerStyle}>{children}</View>
  )
};


const styles = StyleSheet.create({
  buttonOutlineStyle: {
    marginHorizontal: 20,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 55,
  },
  buttonStyle: {
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#188BCC',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 55,
  },
  wrapperIconAndText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});