import {
  Center,
  Text,
  Box,
  ScrollView,
  FormControl,
  VStack,
  Input,
} from "native-base";
import React from "react";
import CustomButton from "../Components/CustomButton";
import Colors from "../data/colors";

const shoppingInputs = [
  {
    lable: "ENTER CITY",
    type: "text",
  },
  {
    lable: "ENTER COUNTRY",
    type: "text",
  },
  {
    lable: "ENTER POSTAL CODE",
    type: "text",
  },
  {
    lable: "ENTER ADDRESS",
    type: "text",
  },
];
const ShoppingScreen = ({ navigation }) => {
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* Inputs */}

      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {shoppingInputs.map((item, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {item.lable}
                </FormControl.Label>
                <Input
                  type={item.type}
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subGray}
                  py={4}
                  color={Colors.main}
                  _focus={{
                    bg: Colors.subGray,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
            <CustomButton
              onPress={() => navigation.navigate("Checkout")}
              bg={Colors.main}
              color={Colors.white}
              mt={5}
            >
              CONTINUE
            </CustomButton>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ShoppingScreen;
