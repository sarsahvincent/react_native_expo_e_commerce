import { Text, HStack } from "native-base";
import Colors from '../data/colors'

import React from "react";

function HomeSearch() {
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg={Colors.main}
      py={4}
      alignItems="center"
      safeAreaTop
    ></HStack>
  );
}

export default HomeSearch;
