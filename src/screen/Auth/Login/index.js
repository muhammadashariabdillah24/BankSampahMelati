import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Logo from '../../../assets/icon/logo.svg';
import {Fumi} from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = () => {
  return (
    <View>
      <ScrollView>
        <View>
          <Logo width={228} height={95} />
          <Text>Bank Sampah Melati</Text>
        </View>

        <View>
          <Fumi
            label="Masukan username"
            iconClass={Icon}
            iconName="account"
            iconColor={'#f95a25'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
          />

          <Fumi
            label="Masukan username"
            iconClass={Icon}
            iconName="account"
            iconColor={'#f95a25'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;


const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#1591D8',
  },
  wrapperLogoAndText: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 30
  },
  logoText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  wrapperUsernameAndPasswordAndButtonLogin: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: 20
  },
  textNoHaveAccount: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  buttonRegisterNow: {
    marginHorizontal: 20,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1
  },
  textForgotPassword: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  }
});