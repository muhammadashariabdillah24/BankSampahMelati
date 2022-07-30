import {View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Logo from '../../../assets/icon/logo.svg';
import {Fumi} from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from '../../../assets/components/atoms/Button';
import IcCheckListDouble from '../../../assets/icon/ic_check_double.svg';
import {useNavigation} from '@react-navigation/native';

const LupaPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerStyle}>
      <ScrollView>
        <View style={styles.wrapperTextChangePasswordAndLine}>
          <Text style={styles.textForgotPassword}>Ganti Password</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.wrapperEmailAddress}>
          <Fumi
            label="Masukan email"
            iconClass={Icon}
            iconName="email"
            iconColor={'#1591D8'}
            textContentType="emailAddress"
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{
              color: 'rgba(0, 0, 0, 0.6)',
            }}
            style={styles.textInputStyle}
          />
        </View>

        <Text style={styles.textNote}>
          <Text style={styles.redStar}>*</Text> Note : Masukan email yang terdaftar pada aplikasi Bank Sampah Melati
        </Text>

        <Button
          outline={false}
          buttonStyle={styles.buttonCheck}
          onPress={() => console.log('Oke Pilih Cek')}>
          <IcCheckListDouble width={25} height={25} />
          <Text style={styles.textCheck}>Cek</Text>
        </Button>
      </ScrollView>
    </View>
  );
};

export default LupaPassword;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1591D8',
  },
  wrapperTextChangePasswordAndLine: {
    marginVertical: 30,
    alignItems: 'center',
  },
  textForgotPassword: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    marginVertical: 10,
  },
  line: {
    borderWidth: 1,
    borderColor: '#fff',
    width: '50%',
  },
  textInputStyle: {
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
  },
  wrapperEmailAddress: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    width: 295,
  },
  redStar: {
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
    color: '#FF0000',
    marginRight: 5,
  },
  textNote: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#FFF',
    maxWidth: '70%',
    marginHorizontal: 20,
    marginTop: 10
  },
  buttonCheck: {
    backgroundColor: '#188BCC',
    marginTop: 30,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    
    elevation: 6,
  },
  textCheck: {
    fontSize: 14,
    marginLeft: 5,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
});
