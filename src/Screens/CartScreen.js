import { Text, Box, Center, Button, ScrollView, HStack } from "native-base";
import React from "react";
import Colors from "../data/colors";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";
import CustomButton from "../Components/CustomButton";

const CartScreen = () => {
  return (
    <Box safeAreaTop flex={1} bg={Colors.subYellow} py={5}>
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* CART IS EMPTY SCREEN */}
      {/* <CartEmpty /> */}
      {/* CART ITEMS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        {/*total button */}
        <Center my={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>Total</Text>
            <Button
              rounded={50}
              h={45}
              px={10}
              bg={Colors.main}
              _text={{ color: Colors.white, fontWeight: "semibold" }}
              _pressed={{ bg: Colors.main }}
            >
              $455
            </Button>
          </HStack>
        </Center>
        {/* Checkout button*/}
        <Center px={5}>
          <CustomButton bg={Colors.black} color={Colors.white} mt={10}>
            CHECKOUT
          </CustomButton>
        </Center>
      </ScrollView>
    </Box>
  );
};

export default CartScreen;
