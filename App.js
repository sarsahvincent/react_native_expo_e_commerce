import { NativeBaseProvider } from "native-base";
import Screen from "./src/Screens/ShoppingScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <Screen />
    </NativeBaseProvider>
  );
}
