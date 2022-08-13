import React from "react";
import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import Colors from "../../data/colors";
import CustomButton from "../CustomButton";
const inputs = [
  {
    lable: "USER NAME",
    type: "text",
  },
  {
    lable: "EMAIL",
    type: "email",
  },
  {
    lable: "PASSWORD",
    type: "password",
  },
  {
    lable: "CONFIRM PASSWORD",
    type: "password",
  },
];
const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={6} mt={5} pb={10}>
          {inputs.map((item, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {item.lable}
              </FormControl.Label>
              <Input
                py={3}
                type={item.type}
                borderWidth={0.2}
                borderColor={Colors.main}
                bg={Colors.subYellow}
                color={Colors.main}
                fontSize={15}
                _focus={{
                  bg: Colors.subYellow,
                  borderWidth: 1,
                  borderColor: Colors.main,
                }}
              />
            </FormControl>
          ))}
          <CustomButton bg={Colors.main} color={Colors.white}>
            UPDATE PROFILE
          </CustomButton>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
