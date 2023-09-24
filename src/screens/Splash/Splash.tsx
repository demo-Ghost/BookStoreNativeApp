import { Image, StyleSheet } from "react-native";
import { ROUTES } from "../../constants/routes";
import Screen from "../../components/Screen/Screen";
import { Button, Heading, Text } from "native-base";
import { colors } from "../../styles/colors";
import ContainerCentered from "../../components/ContainerCentered/ContainerCentered";

const Splash = ({ navigation }) => {
  return (
    <Screen>
      <ContainerCentered style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../../assets/logo_large.png")}
        />
        <Heading size="md" color={colors.gray.light}>
          Εφαρμογή καταγραφής προϊόντων
        </Heading>
        <Button
          style={styles.button}
          variant="outline"
          onPress={() => navigation.navigate(ROUTES.TABS.name)}
        >
          <Text fontSize="lg" color={colors.primary.base}>
            Έισοδος
          </Text>
        </Button>
      </ContainerCentered>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  title: {
    marginBottom: 10,
  },
  button: {
    marginTop: 50,
    width: 120,
  },
  image: {
    height: 80,
    resizeMode: "contain",
  },
});

export default Splash;
