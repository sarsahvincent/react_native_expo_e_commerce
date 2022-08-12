import { StyleSheet } from "react-native";
import { NativeBaseProvider, Text, Box } from "native-base";
import React from "react";

const OrderScreen = () => {
  return (
    <NativeBaseProvider>
      <Text>OrderScreen</Text>
    </NativeBaseProvider>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
