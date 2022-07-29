import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screen/Auth/Login';
import LupaPassword from '../../screen/Auth/LupaPassword';
import Register from '../../screen/Auth/Register';

const Stack = createNativeStackNavigator();

const NativeStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen  
            name="Login"
            component={Login}
            options={{
                headerShown: false
            }}
        />

        <Stack.Screen 
            name="LupaPassword"
            component={LupaPassword}
        />

        <Stack.Screen 
            name="Register"
            component={Register}
        />
    </Stack.Navigator>
  )
}

export default NativeStackNavigator