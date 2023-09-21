import { StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen/Screen";

const Books = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Books</Text>
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
