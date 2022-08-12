import { StyleSheet } from "react-native";
import { NativeBaseProvider, Text, Box } from "native-base";
import React from "react";

const PaymentScreen = () => {
  return (
    <NativeBaseProvider>
      <Text>PaymentScreen</Text>
    </NativeBaseProvider>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
