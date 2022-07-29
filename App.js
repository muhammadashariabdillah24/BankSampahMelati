import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NativeStackNavigator from "./src/routes/NativeStackNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <NativeStackNavigator />
    </NavigationContainer>
  );
}

export default App;