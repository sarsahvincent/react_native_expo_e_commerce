import React from "react";
import Colors from "../data/colors";
import {
  Box,
  Center,
  HStack,
  Image,
  FlatList,
  Pressable,
  VStack,
  Text,
  Button,
} from "native-base";
import { products } from "../data/Products";

const OrderItem = () => {
  const renderItem = ({ item }) => (
    <Pressable>
      <Box mb={3}>
        <HStack
          alignItems="center"
          bg={Colors.white}
          shadow={1}
          rounded={10}
          overflow="hidden"
        >
          <Center w="25%" bg={Colors.deepestYellow}>
            <Image
              source={{ uri: item.image }}
              alt={item.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
          </Center>
          <VStack w="60%">
            <Text color={Colors.black} isTruncated bold fontSize={12}>
              {item.name}
            </Text>
            <Text mt={2} color={Colors.lightBlack} bold fontSize={12}>
              ${item.price}
            </Text>
          </VStack>
          <Center>
            <Button
              _pressed={{ bg: Colors.main }}
              bg={Colors.main}
              _text={{ color: Colors.white }}
            >
              5
            </Button>
          </Center>
        </HStack>
      </Box>
    </Pressable>
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products.slice(0, 3)}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default OrderItem;
