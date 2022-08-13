import { Box, Center, Text } from "native-base";
import React from "react";
import Colors from "../data/colors";
import { FontAwesome } from "@expo/vector-icons";
import CustomButton from "./CustomButton";

const CartEmpty = () => {
  return (
    <Box flex={1} px={4}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
          <FontAwesome name="shopping-basket" size={60} color={Colors.main} />
        </Center>
        <Text color={Colors.main} bold mt={5}>
          CART IS EMPTY
        </Text>
      </Center>
      <CustomButton bg={Colors.black} color={Colors.white}>
        START SHOPPING
      </CustomButton>
    </Box>
  );
};

export default CartEmpty;
