import { StyleSheet } from "react-native";
import {
  Text,
  Image,
  Box,
  Heading,
  VStack,
  Input,
  Button,
  Pressable,
} from "native-base";
import React from "react";
import Colors from "../data/colors";
import { MaterialIcons, Ionicons,FontAwesome } from "@expo/vector-icons";

const RegisterScreen = () => {
  return (
    <Box flex={1} bg={Colors.white}>
      <Image
        flex={1}
        alt="Lolog"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/login.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>SIGN UP</Heading>
        <VStack pt="6" space={5}>
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={24} color={Colors.main} />
            }
            placeholder="user name"
            variant="underlined"
            w="70%"
            pl={2}
            borderBottomColor={Colors.underline}
          />
          <Input
            InputLeftElement={
              <MaterialIcons name="mail" size={24} color={Colors.main} />
            }
            placeholder="user@mail.com"
            variant="underlined"
            w="70%"
            pl={2}
            borderBottomColor={Colors.underline}
          />
          <Input
            type="password"
            InputLeftElement={
              <Ionicons name="eye" size={24} color={Colors.main} />
            }
            placeholder="************"
            variant="underlined"
            w="70%"
            pl={2}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button rounded={50} my={30} w="40%" bg={Colors.main}>
          SIGN UP
        </Button>
        <Pressable mt="4">
          <Text color={Colors.deepestYellow}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
