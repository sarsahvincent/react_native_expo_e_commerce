import { Text, Box, HStack, Input, Pressable } from "native-base";
import Colors from "../data/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import React from "react";

function HomeSearch() {
  const navigation = useNavigation();
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg={Colors.main}
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="Samsung, Nokia, Iphone ..."
        w="85%"
        bg={Colors.white}
        h={12}
        borderWidth={0}
        _focus={{ bg: Colors.white }}
      />
      <Pressable onPress={() => navigation.navigate("Cart")}>
        <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-13}
          bg={Colors.red}
          left={2}
          _text={{
            color: Colors.white,
            fontSize: "11px",
          }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
}

export default HomeSearch;
