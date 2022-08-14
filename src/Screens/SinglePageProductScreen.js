import {
  Text,
  HStack,
  ScrollView,
  Box,
  Image,
  Heading,
  Spacer,
} from "native-base";
import React, { useState } from "react";
import Colors from "../data/colors";
import ProductRating from "../Components/ProductRating";
import NumericInput from "react-native-numeric-input";
import CustomButton from "../Components/CustomButton";
import Review from "../Components/Review";

const SinglePageProductScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [value, setValue] = useState(0);
  return (
    <Box pt={2} safeAreaTop flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <ProductRating
          value={product.rating}
          text={`${product.numReviews} reviews`}
        />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInstock > 0 ? (
            <>
              <NumericInput
                onChange={(e) => setValue(e)}
                value={value}
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                maxValue={product.countInstock}
                minValue={0}
                textColor={Colors.black}
                iconStyle={{ color: Colors.white }}
                rightButtonBackgroundColor={Colors.main}
                leftButtonBackgroundColor={Colors.main}
              />
            </>
          ) : (
            <Heading bold color={Colors.red} italic fontSize={12}>
              Out of Stock
            </Heading>
          )}

          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            ${product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.description}
        </Text>
        <CustomButton
          bg={Colors.main}
          color={Colors.white}
          mt={10}
          onPress={() => navigation.navigate("Cart")}
        >
          ADD TO CART
        </CustomButton>
        <Review />
      </ScrollView>
    </Box>
  );
};

export default SinglePageProductScreen;
