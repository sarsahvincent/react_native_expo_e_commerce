import { Button } from "native-base";

const CustomButton = ({ mt, bg, color, children, onPress }) => {
  return (
    <Button
      w="full"
      mt={mt}
      h={55}
      rounded="full"
      bg={bg}
      _text={{
        color: color,
        fontWeight: "bold",
      }}
      _pressed={{ bg: bg }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
