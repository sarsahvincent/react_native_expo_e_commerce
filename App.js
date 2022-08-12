import HomeScreen from "./src/Screens/HomeScreen";
import { Box, HStack, NativeBaseProvider } from "native-base";
import Colors from "./src/data/colors";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
