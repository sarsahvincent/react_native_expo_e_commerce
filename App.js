import { NativeBaseProvider } from "native-base";
import Screen from "./src/Screens/OrderScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <Screen />
    </NativeBaseProvider>
  );
}
