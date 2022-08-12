import { StyleSheet } from "react-native";
import { NativeBaseProvider, Text, Box } from "native-base";
import React from "react";

const ShoppingScreen = () => {
  return (
    <NativeBaseProvider>
      <Text>ShoppingScreen</Text>
    </NativeBaseProvider>
  );
};

export default ShoppingScreen;

const styles = StyleSheet.create({});
