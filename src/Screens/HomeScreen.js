import React from "react";
import { Box } from "native-base";
import HomeSearch from "../Components/HomeSearch";
import HomeProducts from "../Components/HomeProducts";
import Colors from "../data/colors";

const HomeScreen = ({ navigation }) => {
  return (
    <Box flex={1} F bg={Colors.subYellow}>
      <HomeSearch navigation={navigation} />
      <HomeProducts navigation={navigation} />
    </Box>
  );
};

export default HomeScreen;

