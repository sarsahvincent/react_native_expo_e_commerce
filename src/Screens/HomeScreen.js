import { StyleSheet } from "react-native";
import React from "react";
import { NativeBaseProvider, Text, Box } from "native-base";

const HomeScreen = () => {
  return (
    <NativeBaseProvider>
      <Text>HomeScreen</Text>
    </NativeBaseProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
