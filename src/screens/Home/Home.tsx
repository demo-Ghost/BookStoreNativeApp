import { Image, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen/Screen";
import { Box, Button, Fab, Icon } from "native-base";
import BarcodeScannerIcon from "../../icons/BarcodeScannerIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import FabBottom from "../../components/FabBottom/FabBottom";
import Container from "../../components/Container/Container";
import { colors } from "../../styles/colors";
import TopBanner from "../../components/TopBanner/TopBanner";

const Home = () => {
  return (
    <Screen>
      <Container>
        <TopBanner />
      </Container>
    </Screen>
  );
};

// const styles = StyleSheet.create({});

export default Home;
