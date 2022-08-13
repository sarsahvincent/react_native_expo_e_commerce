import {
  Center,
  Text,
  Box,
  ScrollView,
  Image,
  HStack,
  VStack,
} from "native-base";
import React from "react";
import CustomButton from "../Components/CustomButton";
import Colors from "../data/colors";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const paymentMethods = [
  {
    image: require("../../assets/paypal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/visamaster.png"),
    alt: "visamaster",
    icon: "FontAwesome",
  },
  {
    image: require("../../assets/discover.png"),
    alt: "discover",
    icon: "FontAwesome",
  },
  {
    image: require("../../assets/mtn.png"),
    alt: "mobilemoney",
    icon: "FontAwesome",
  },
];
const PaymentScreen = () => {
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      {/* Inputs */}

      <Box h="full" bg={Colors.deepestYellow} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((item, index) => (
              <HStack
                key={index}
                alignItems="center"
                bg={Colors.white}
                px={1}
                justifyContent="space-between"
                rounded={10}
              >
                <Box>
                  <Image
                    source={item.image}
                    alt={item.alt}
                    resizeMode="contain"
                    w={60}
                    h={50}
                  />
                </Box>
                {item.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={24}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={24}
                    color={Colors.main}
                  />
                )}
              </HStack>
            ))}
            <CustomButton bg={Colors.main} color={Colors.white} mt={5}>
              CONTINUE
            </CustomButton>
            <Text italic textAlign="center">
              Payment method is <Text bold>"Paypal"</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default PaymentScreen;
