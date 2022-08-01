import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screen/Home';
import IcLogout from '../../assets/icon/ic_logout.svg';
import IcNotification from '../../assets/icon/ic_notification.svg';

const Drawer = createDrawerNavigator();

const DrawerStackNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: ({navigation}) => (
          <View style={styles.containerStyle}>
            <TouchableOpacity
              style={styles.buttonLogoutStyle}
              onPress={() => {
                navigation.goBack();
              }}>
              <IcLogout width={22} height={22} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonNotificationStyle}
              onPress={() => {
                console.log('Oke')
              }}>
              <IcNotification width={22} height={22} />
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
    justifyContent: 'space-between',
  },
  buttonLogoutStyle: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonNotificationStyle: {
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  screenNameStyle: {
    textAlign: 'center',
  },
});
