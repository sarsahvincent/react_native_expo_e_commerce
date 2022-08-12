import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/Screens/SinglePageProductScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
