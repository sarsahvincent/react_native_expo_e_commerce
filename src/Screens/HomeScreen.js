import { StyleSheet } from "react-native";
import React from "react";
import { Text, HStack, Box } from "native-base";
import HomeSearch from "../Components/HomeSearch";
import HomeProducts from "../Components/HomeProducts";
import Colors from "../data/colors";

const HomeScreen = () => {
  return (
    <Box flex={1} F bg={Colors.subYellow}>
      <HomeSearch />
      <HomeProducts />
    </Box>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
