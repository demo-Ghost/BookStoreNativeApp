import { StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen/Screen";
import { Box, Button, Fab, Icon } from "native-base";
import BarcodeScannerIcon from "../../icons/BarcodeScannerIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import FabBottom from "../../components/FabBottom/FabBottom";

const Home = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
