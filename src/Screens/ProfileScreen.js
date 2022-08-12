import { StyleSheet } from "react-native";
import { NativeBaseProvider, Text, Box } from "native-base";
import React from "react";

const ProfileScreen = () => {
  return (
    <NativeBaseProvider>
      <Text>ProfileScreen</Text>
    </NativeBaseProvider>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
