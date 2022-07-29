import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';

export const Rectangular = ({
  onPress,
  imageSource,
  nameItemText,
  amountText,
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Component
        containerStyle={styles.containerStyle}
        wrapperImageAndTypeText={styles.wrapperImageAndTypeText}
        imageStyle={styles.imageStyle}
        imageSource={imageSource}
        nameItemTextStyle={styles.nameItemTextStyle}
        nameItemText={nameItemText}
        accomodateAmountTextStyle={styles.accomodateAmountTextStyle}
        amountTextStyle={styles.amountTextStyle}
        amountText={amountText}
      />
    </TouchableNativeFeedback>
  );
};

const Component = ({
  containerStyle,
  wrapperImageAndTypeText,
  imageStyle,
  imageSource,
  nameItemTextStyle,
  nameItemText,
  accomodateAmountTextStyle,
  amountTextStyle,
  amountText,
}) => {
  return (
    <View style={containerStyle}>
      <View style={wrapperImageAndTypeText}>
        <Image style={imageStyle} source={imageSource} />
        <Text style={nameItemTextStyle}>{nameItemText}</Text>
      </View>
      <View style={accomodateAmountTextStyle}>
        <Text style={amountTextStyle}>{amountText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: 339,
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  wrapperImageAndTypeText: {
    height: 72,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageStyle: {
    width: 72,
    height: 72,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  nameItemTextStyle: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
  },
  accomodateAmountTextStyle: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  amountTextStyle: {
    color: '#FFFF',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
});
