import { StyleSheet } from "react-native";
import { Text, Box, Center, Image, VStack } from "native-base";
import React from "react";
import Colors from "../data/colors";
import CustomButton from "../Components/CustomButton";

const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image
          alt="logo"
          source={require("../../assets/basket.png")}
          size="lg"
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <CustomButton bg={Colors.black} color={Colors.white}>
          REGISTER
        </CustomButton>
        <CustomButton bg={Colors.white} color={Colors.black}>REGISTER</CustomButton>
      </VStack>
    </Box>
  );
};

export default NotVerifyScreen;

const styles = StyleSheet.create({});
