import {
  Box,
  Text,
  Heading,
  VStack,
  Select,
  CheckIcon,
  FormControl,
  TextArea,
} from "native-base";
import React, { useState } from "react";
import ProductRating from "./ProductRating";
import Message from "./Message";
import Colors from "../data/colors";
import CustomButton from "./CustomButton";

export default function Review() {
  const [rating, setRating] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        Review
      </Heading>
      <Message
        color={Colors.main}
        bg={Colors.subYellow}
        size={10}
        children="NO REVIEW"
        bold
      />
      <Box p={3} bg={Colors.subYellow} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          Vincen Sarsah
        </Heading>
        <ProductRating value={4} />
        <Text mb={3}>Jan 12 2022</Text>

        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          bo
          children="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptatem sunt temporibus recusandae soluta dolore eaque odit ipsam, ipsum fugiat iusto placeat perferendis ducimus adipisci. Dolores ullam doloribus repellendus officiis."
        />
      </Box>
      <Box mt={6}>
        <Heading bold fontSize={15} mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Reting
            </FormControl.Label>
            <Select
              bg={Colors.subYellow}
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subYellow,
                endIcon: <CheckIcon size={2} />,
              }}
              selectedValue={rating}
              onValueChange={(e) => setRating(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              mb={4}
              h={20}
              w="full"
              placeholder="This product is good ..."
              borderWidth={0}
              bg={Colors.subYellow}
              py={4}
              _focus={{ bg: Colors.subYellow }}
            />
          </FormControl>
          <CustomButton bg={Colors.main} color={Colors.white}>
            SUBMIT
          </CustomButton>
        </VStack>
      </Box>
    </Box>
  );
}
