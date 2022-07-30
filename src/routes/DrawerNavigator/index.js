import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screen/Home';
import IcArrowBack from '../../assets/icon/ic_arrow_left.svg';

const Drawer = createDrawerNavigator();

const DrawerStackNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: ({navigation}) => (
          <View style={styles.containerStyle}>
            <TouchableOpacity
              style={styles.arrowStyle}
              onPress={() => {
                navigation.goBack();
              }}>
              <IcArrowBack width={22} height={22} />
            </TouchableOpacity>
          </View>
        ),
      }}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerStackNavigator;

const styles = StyleSheet.create({
  containerStyle: {
    height: 59,
    width: '100%',
    backgroundColor: '#1591D8',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowStyle: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  screenNameStyle: {
    textAlign: 'center',
  },
});
