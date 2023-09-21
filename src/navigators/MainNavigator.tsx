import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import { ROUTES } from "../constants/routes";
import Splash from "../screens/Splash/Splash";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.SPLASH.name}
        options={{ headerShown: false }}
        component={Splash}
      />
      <Stack.Screen
        name={ROUTES.TABS.name}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
