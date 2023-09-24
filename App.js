import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./src/navigators/MainNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import { theme } from "./src/styles/theme";

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
