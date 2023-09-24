import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import { ROUTES } from "../constants/routes";
import Books from "../screens/Books/Books";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === ROUTES.HOME.name) {
            return (
              <MaterialCommunityIcons name={"home"} size={size} color={color} />
            );
          }

          if (route.name === ROUTES.BOOKS.name) {
            return <Entypo name="book" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME.name}
        component={Home}
        options={{ headerShown: false, title: "Αρχική" }}
      />
      <Tab.Screen
        name={ROUTES.BOOKS.name}
        component={Books}
        options={{
          headerShown: false,
          title: "Βιβλία",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
