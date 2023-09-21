import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import { ROUTES } from "../constants/routes";
import Books from "../screens/Books/Books";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.HOME.name}
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.BOOKS.name}
        component={Books}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
