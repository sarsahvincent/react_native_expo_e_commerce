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

const SinglePageProductScreen = () => {
  const [value, setValue] = useState(0);
  return (
    <Box safeAreaTop flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/phone.jpg")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          New Phone from Chhina
        </Heading>
        <ProductRating value={4.5} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            onChange={(e) => setValue(e)}
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            maxValue={15}
            minValue={0}
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum eaque
          eius tenetur reprehenderit repudiandae. Similique maxime debitis,
          delectus non, expedita soluta nulla asperiores sapiente vero quis
          recusandae repellendus? Numquam facilis debitis officia ad iure
          aspernatur accusantium est labore eaque dolorum consectetur ea
          mollitia, ipsam corporis repudiandae quidem dicta ullam magnam. Autem
        </Text>
        <CustomButton bg={Colors.main} color={Colors.white} mt={10}>
          ADD TO CART
        </CustomButton>
        <Review />
      </ScrollView>
    </Box>
  );
};

export default SinglePageProductScreen;
