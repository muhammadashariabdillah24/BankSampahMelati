import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '../../assets/components/atoms/Button'
import IcMoney from '../../assets/icon/ic_money_v_one.svg';

const Home = () => {
  return (
    <View style={styles.containerStyle}>
        <ScrollView>
            <View style={styles.wrapperTitleSaldoAndSaldo}>
                <View style={styles.wrapperSaldo}>
                    <View style={styles.wrapperTitleSaldo}>
                        <Text style={styles.titleSaldo}>Saldo</Text>
                    </View>
                    <View style={styles.saldo}>
                        <Text style={styles.textSaldo}>150.000,-</Text>
                    </View>
                </View>

                <Button 
                    outline={false}
                    buttonStyle={styles.buttonTarikSaldo}
                    onPress={() => {}}
                >
                    <IcMoney width={20} height={20} />
                    <Text style={styles.textTarikSaldo}>Tarik Saldo</Text>
                </Button>
            </View>

            <Button 
                outline={false}
                buttonStyle={styles.buttonTarikSaldo}
                onPress={() => console.log('Oke')}
            />
        </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#fff'
    },
    wrapperTitleSaldoAndSaldo: {
        backgroundColor: '#1591D8',
        borderBottomRightRadius: 500,
        width: '100%',
        height: 366
    },
    wrapperSaldo: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: '50%',
        marginLeft: 10,
        marginTop: 30
    },
    wrapperTitleSaldo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: '#38A1DD'
    },
    titleSaldo: {
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Poppins-Regular'
    },
    saldo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    textSaldo: {
        fontSize: 24,
        fontFamily: 'POppins-Regular',
        color: '#0072B2'
    },
    buttonTarikSaldo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#47A4DA',
        borderRadius: 5,
        maxWidth: '50%'
    },
    textTarikSaldo: {
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Poppins-Regular',
    }
})