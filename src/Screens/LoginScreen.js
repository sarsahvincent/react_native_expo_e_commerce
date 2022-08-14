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
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
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
        <Heading>LOGIN</Heading>
        <VStack pt="6" space={5}>
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
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          onPress={() => navigation.navigate("Bottom")}
          rounded={50}
          my={30}
          w="40%"
          bg={Colors.main}
        >
          Login
        </Button>
        <Pressable onPress={() => navigation.navigate("Register")} mt="4">
          <Text color={Colors.deepestYellow}>Sign up</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default LoginScreen;
