import { StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen/Screen";

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
