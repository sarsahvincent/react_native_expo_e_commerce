import { StyleSheet } from "react-native";
import { Image, Text, Box, Center,Heading } from "native-base";
import React from "react";
import Colors from "../data/colors";


const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
    
      <Center w="full" h={250}>
        <Image source={require("../../assets/basket.png")} alt="logo" size="lg"/>
      </Center>
    </Box>
  );
};

export default NotVerifyScreen;

const styles = StyleSheet.create({});
