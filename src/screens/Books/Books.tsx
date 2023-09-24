import { StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen/Screen";
import FabBottom from "../../components/FabBottom/FabBottom";
import { useCallback, useState } from "react";
import Scanner from "../../components/Scanner/Scanner";
import Container from "../../components/Container/Container";

const Books = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [items, setItems] = useState([]);

  const onPress = useCallback(() => {
    setShowScanner((prev) => !prev);
  }, []);

  const onScan = useCallback((scanningResult) => {
    console.log(scanningResult);
    setItems((prev) => [...prev, scanningResult?.data]);
    setShowScanner(false);
  }, []);

  return (
    <Screen>
      <Container style={styles.container}>
        <View>
          {items.map((item, index) => (
            <Text key={index} style={{ color: "black" }}>
              {item.label}
            </Text>
          ))}
        </View>
        <FabBottom onPress={onPress} />
        {showScanner && <Scanner onScan={onScan} />}
      </Container>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Books;
