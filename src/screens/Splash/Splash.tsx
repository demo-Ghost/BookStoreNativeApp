import { StyleSheet, Text, View } from "react-native";
import { ROUTES } from "../../constants/routes";
import ContainerCentered from "../../components/ContainerCentered/ContainerCentered";
import Screen from "../../components/Screen/Screen";
import { Button } from "native-base";

const Splash = ({ navigation }) => {
  return (
    <Screen>
      <ContainerCentered>
        <Text style={styles.title}>Splash</Text>
        <Button onPress={() => navigation.navigate(ROUTES.TABS.name)}>
          Go to Home
        </Button>
      </ContainerCentered>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
  },
});

export default Splash;
