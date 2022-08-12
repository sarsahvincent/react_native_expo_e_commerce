import { Box, Text, Heading } from "native-base";
import React from "react";
import ProductRating from "./ProductRating";
import Message from "./Message";
import Colors from "../data/colors";

export default function Review() {
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        Review
      </Heading>
      <Message
        color={Colors.main}
        bg={Colors.deepestGray}
        size={10}
        children="NO REVIEW"
      />
      <Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          Vincen Sarsah
        </Heading>
        <ProductRating value={4} />
        <Text mb={3}>Jan 12 2022</Text>

        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptatem sunt temporibus recusandae soluta dolore eaque odit ipsam, ipsum fugiat iusto placeat perferendis ducimus adipisci. Dolores ullam doloribus repellendus officiis."
        />
      </Box>
    </Box>
  );
}
