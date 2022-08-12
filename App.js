import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/Screens/RegisterScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
