import React from "react";
import { Center, Text } from "native-base";

export default function Message({ bg, color, children, size }) {
  return (
    <Center bg={bg} p={4} rounded={5}>
      <Text color={color} fontSize={size}>
        {children}
      </Text>
    </Center>
  );
}
