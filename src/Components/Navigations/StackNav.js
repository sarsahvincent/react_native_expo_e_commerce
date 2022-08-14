import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/HomeScreen";
import PlaceOrderScreen from "../../Screens/PlaceOrderScreen";
import PaymentScreen from "../../Screens/PaymentScreen";
import ShippingScreen from "../../Screens/ShippingScreen";
import SinglePageProductScreen from "../../Screens/SinglePageProductScreen";
import React from "react";

const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Single" component={SinglePageProductScreen} />
      <Stack.Screen name="Shipping" component={ShippingScreen} />
      <Stack.Screen name="Checkout" component={PaymentScreen} />
      <Stack.Screen name="Placeorder" component={PlaceOrderScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
