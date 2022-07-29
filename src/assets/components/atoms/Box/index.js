import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import IcRp from '../../../icon/ic_rp.svg';

export const Box = ({
  onPress,
  imageSource,
  titleText,
  priceText,
  stockText,
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Component 
        containerStyle={styles.containerStyle}
        ImageStyle={styles.ImageStyle}
        ImageSource={imageSource}
        titleText={titleText}
        titleTextStyle={styles.titleTextStyle}
        priceText={priceText}
        priceTextStyle={styles.priceTextStyle}
        stockTextStyle={styles.stockTextStyle}
        stockText={stockText}
        WrapperTitleTextAndPriceText={styles.wrapperTitleTextAndPriceTextAndStockText}
        AccomodateIcRpAndPriceText={styles.accomodateTitleTextAndPriceText}
      />
    </TouchableNativeFeedback>
  );
};

const Component = ({
  containerStyle,
  ImageStyle,
  ImageSource,
  titleText,
  priceText,
  WrapperTitleTextAndPriceText,
  titleTextStyle,
  AccomodateIcRpAndPriceText,
  priceTextStyle,
  stockText,
  stockTextStyle,
}) => {
  return (
    <View style={containerStyle}>
      <Image style={ImageStyle} source={ImageSource} />
      <View style={WrapperTitleTextAndPriceText}>
        <Text style={titleTextStyle}>{titleText}</Text>
        <View style={AccomodateIcRpAndPriceText}>
          <IcRp width={50} height={50} />
          <Text style={priceTextStyle}>{priceText}</Text>
        </View>
      </View>

      <Text style={stockTextStyle}>{stockText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: 163,
    height: 181,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  imageStyle: {
    width: 163,
    height: 112,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  wrapperTitleTextAndPriceTextAndStockText: {
    width: 163,
    height: 69,
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accomodateTitleTextAndPriceText: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleTextStyle: {
    color: '#239FE7',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  priceTextStyle: {
    color: '#239FE7',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  stockTextStyle: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});
