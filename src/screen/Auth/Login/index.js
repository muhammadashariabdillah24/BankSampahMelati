import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Fumi} from 'react-native-textinput-effects';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../../assets/icon/logo.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from '../../../assets/components/atoms/Button';
import IcEnter from '../../../assets/icon/ic_enter.svg';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerStyle}>
      <ScrollView>
        <View style={styles.wrapperLogoAndText}>
          <Logo width={228} height={95} />
          <Text style={styles.logoText}>Bank Sampah Melati</Text>
        </View>

        <View style={styles.wrapperUsernameAndPasswordAndButtonLogin}>
          <Fumi
            label="Masukan username"
            iconClass={Icon}
            iconName="account"
            iconColor={'#1591D8'}
            textContentType="username"
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{
              color: 'rgba(0, 0, 0, 0.6)',
            }}
            style={styles.textInputStyle}
          />

          <Fumi
            label="Masukan password"
            iconClass={Icon}
            textContentType="password"
            secureTextEntry={true}
            allowFontScaling={true}
            iconName="lock"
            iconColor={'#1591D8'}
            placeholderTextColor={'#000'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{
              color: 'rgba(0, 0, 0, 0.6)',
            }}
            style={styles.textInputStyle}
          />
        </View>

        <Button
          outline={false}
          buttonStyle={styles.buttonEnter}
          onPress={() =>
            navigation.navigate('DrawerStackNavigator', {
              screen: 'Home',
            })
          }>
          <IcEnter width={25} height={25} />
          <Text style={styles.textEnter}>Masuk</Text>
        </Button>

        <Text style={styles.textNoHaveAccount}>Belum punya akun ?</Text>

        <Button outline={true} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textRegisterNow}>Daftar Sekarang</Text>
        </Button>

        <Text style={styles.textForgotPassword}>Lupa password ?</Text>

        <Button
          outline={true}
          onPress={() => navigation.navigate('LupaPassword')}>
          <Text style={styles.textChangePassword}>Ganti Password</Text>
        </Button>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#1591D8',
    alignItems: 'center',
  },
  wrapperLogoAndText: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  logoText: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
  wrapperUsernameAndPasswordAndButtonLogin: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    width: 295,
  },
  textInputStyle: {
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonEnter: {
    backgroundColor: '#188BCC',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  textEnter: {
    fontSize: 14,
    marginLeft: 5,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
  textNoHaveAccount: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  textRegisterNow: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
  textForgotPassword: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  textChangePassword: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
});
