import {
  Center,
  Modal,
  HStack,
  VStack,
  Text,
  Button,
  Pressable,
  Image,
} from "native-base";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Colors from "../data/colors";

const OrdersInfo = [
  {
    title: "Products",
    price: 123.55,
    color: "black",
  },
  {
    title: "Shipping",
    price: 12.55,
    color: "black",
  },
  {
    title: "Tax",
    price: 5.55,
    color: "black",
  },
  {
    title: "Total",
    price: 141.65,
    color: "main",
  },
];
const OrderModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Center>
      <CustomButton
        onPress={() => {
          setShowModal(true);
        }}
        bg={Colors.black}
        mt={5}
        color={Colors.white}
      >
        SHOW PAYMENT & TOTLA
      </CustomButton>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size="lg"
      >
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.CloseButton></Modal.CloseButton>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfo.map((item, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontWeight="medium">{item.title}</Text>

                  <Text
                    bold
                    color={item.color === "main" ? Colors.main : Colors.black}
                  >
                    {item.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={Colors.payal}
              h={45}
              onPress={() => setShowModal(false)}
              mb={4}
            >
              <Image
                source={require("../../assets/paypal.png")}
                alt="paypal"
                resizeMode="contain"
                w="full"
                h={35}
              />
            </Pressable>
            <Button
              w="full"
              bg={Colors.black}
              h={45}
              onPress={() => setShowModal(false)}
              _pressed={{
                bg: Colors.black,
              }}
            >
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModal;
