import { StyleSheet } from "react-native";
import { Text, Center, Box, Heading, Image } from "native-base";
import React from "react";
import Colors from "../data/colors";
import Tabs from "../Components/Profle/Tabs";

const ProfileScreen = () => {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          alt="profle"
          w={24}
          h={24}
          rounded={50}
          resizeMode="cover"
          source={require("../../assets/Vincent_Sarsah.jpg")}
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Vincent Sarsah
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined on Aug 12 2022
        </Text>
      </Center>
      <Tabs />
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
