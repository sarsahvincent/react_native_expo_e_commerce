import { NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Platform } from "react-native";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "./src/data/colors";
import BottomNav from "./src/Components/Navigations/BottomNav";

const Stack = createNativeStackNavigator();
export default function App() {
  useEffect(() => {
    StatusBar.setBackgroundColor(Colors.main);
    StatusBar.setBarStyle("light-content");
  }, []);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={Platform.OS === "ios" ? true : false} />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Bottom" component={BottomNav} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
