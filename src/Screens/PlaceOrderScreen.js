import { ScrollView, Box, Heading } from "native-base";
import React from "react";
import Colors from "../data/colors";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItem from "../Components/OrderItem";
import PlaceOrderModal from "../Components/PlaceOrderModal";

const PlaceOrderScreen = () => {
  return (
    <Box safeAreaTop bg={Colors.subYellow} flex={1} mb={5} pt={6}>
      <Box>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="Vincent Sarsah"
            text="sarsah.vincent@gmail.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="SHIPPING INFO"
            subTitle="Shipping: Ghana"
            text="Pay Method: PayPay"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="DELIVER TO"
            subTitle="Address"
            text="26, Kwiekuma, MC 2240, Takoradi"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      <Box px={6} flex={1}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        <PlaceOrderModal />
      </Box>
    </Box>
  );
};

export default PlaceOrderScreen;
