import { NativeBaseProvider } from "native-base";
import Screen from "./src/Screens/PaymentScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <Screen />
    </NativeBaseProvider>
  );
}
