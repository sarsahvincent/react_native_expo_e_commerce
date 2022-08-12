import {
  Text,
  ScrollView,
  Flex,
  Pressable,
  Heading,
  Image,
  Box,
} from "native-base";
import React, { useEffect, useState } from "react";
import { products } from "../data/Products";
import Colors from "../data/colors";
import ProductRating from "./ProductRating";

function HomeProducts() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   async function getProducts() {
  //     try {
  //       const response = await axios.get(
  //         "https://reactreduxshoppingcartbackend.herokuapp.com/products"
  //       );
  //       console.log(response.data);
  //       setProducts(response?.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getProducts();
  // }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={4}
      >
        {products.map((product) => (
          <Pressable
            key={product.id}
            w="30%"
            bg={Colors.white}
            rounded="md"
            my={3}
            pt={0.3}
            pb={2}
            overflow="hidden"
          >
            <Image
              source={{
                uri: product.image,
              }}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={3} pt={1}>
              <Heading size="sm" bold>
                ${product.price}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {product.name}
              </Text>
              <ProductRating value={product.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
