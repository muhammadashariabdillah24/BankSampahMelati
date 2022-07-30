import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IcArrowBack from '../../assets/icon/ic_arrow_left.svg';
import DrawerStackNavigator from '../DrawerNavigator';
import Login from '../../screen/Auth/Login';
import LupaPassword from '../../screen/Auth/LupaPassword';
import Register from '../../screen/Auth/Register';

const Stack = createNativeStackNavigator();

const NativeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitle: '',
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
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="LupaPassword"
        component={LupaPassword}
        options={{
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen 
        name="DrawerStackNavigator"
        component={DrawerStackNavigator}
        options={{
          headerShown: false,
          animation: 'flip',
        }}
      />
    </Stack.Navigator>
  );
};

export default NativeStackNavigator;

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
