import { StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen/Screen";
import FabBottom from "../../components/FabBottom/FabBottom";

const Books = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Books</Text>
        <FabBottom />
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

export default Books;
