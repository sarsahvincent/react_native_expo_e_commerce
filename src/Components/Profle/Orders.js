import { Box, HStack, ScrollView, Text, Button } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import Colors from "../../data/colors";

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*Paid Oder */}
        <Pressable>
          <HStack
            my={2}
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepestYellow}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              4343483904034385374347
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic bold color={Colors.black} isTruncated>
              Jan 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{ color: Colors.white }}
              _pressed={{ color: Colors.main }}
            >
              $455
            </Button>
          </HStack>
        </Pressable>

        {/* Not Paid Oder */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            py={5}
            px={2}
            my={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              4343483904034385374347
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={11} italic bold color={Colors.black} isTruncated>
              Jan 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{ color: Colors.white }}
              _pressed={{ color: Colors.red }}
            >
              $455
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Orders;
