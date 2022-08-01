import {View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Logo from '../../../assets/icon/logo.svg';
import {Fumi} from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from '../../../assets/components/atoms/Button';
import IcGroup from '../../../assets/icon/ic_group.svg';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerStyle}>
      <ScrollView>
        <View style={styles.wrapperTextRegisterMemberAndLine}>
          <Text style={styles.textRegisterMember}>Pendaftaran member</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.wrapperTextInput}>
          <Fumi
            label="Masukan nama lengkap"
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
            label="Masukan username"
            iconClass={Icon}
            allowFontScaling={true}
            iconName="account"
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

          <Fumi
            label="Masukan email"
            iconClass={Icon}
            allowFontScaling={true}
            iconName="email"
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

          <Fumi
            label="Masukan nomor handphone"
            iconClass={Icon}
            allowFontScaling={true}
            iconName="cellphone"
            keyboardType="numeric"
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

          <TextInput
            multiline={true}
            numberOfLines={10}
            placeholder="Masukan alamat rumah . . ."
            placeholderTextColor="rgba(0, 0, 0, 0.6)"
            style={[
              styles.textInputStyle,
              {
                height: 217,
                padding: 10,
                backgroundColor: '#fff',
                fontSize: 14,
                color: 'rgba(0,0,0,0.6)',
                fontFamily: 'Poppins-Bold',
              },
            ]}
          />

          <Fumi
            label="Masukan password"
            iconClass={Icon}
            allowFontScaling={true}
            textContentType="password"
            secureTextEntry={true}
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

          <Fumi
            label="Masukan ulang password"
            iconClass={Icon}
            allowFontScaling={true}
            textContentType="password"
            secureTextEntry={true}
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
          buttonStyle={styles.buttonRegister}
          onPress={() => console.log('Oke Pilih Register')}>
          <IcGroup width={25} height={25} />
          <Text style={styles.textRegister}>Daftar</Text>
        </Button>

      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1591D8',
  },
  wrapperTextRegisterMemberAndLine: {
    marginVertical: 30,
    alignItems: 'center',
  },
  textRegisterMember: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    marginVertical: 10,
  },
  line: {
    borderWidth: 1,
    borderColor: '#fff',
    width: '80%',
  },
  textInputStyle: {
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
  },
  wrapperTextInput: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    width: 295,
  },
  buttonRegister: {
    backgroundColor: '#188BCC',
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    
    elevation: 6,
  },
  textRegister: {
    fontSize: 14,
    marginLeft: 5,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
});
