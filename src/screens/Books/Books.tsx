import { StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen/Screen";
import FabBottom from "../../components/FabBottom/FabBottom";
import { useCallback, useState } from "react";
import Scanner from "../../components/Scanner/Scanner";
import Container from "../../components/Container/Container";
import { fetchByISBN, getGoogleBookByISBN } from "../../api/Books/Books";

const Books = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [items, setItems] = useState([]);

  const onPress = useCallback(async () => {
    setShowScanner((prev) => !prev);
  }, []);

  const onScan = useCallback(async (scanningResult) => {
    console.log("***************\n\n\n\n");
    console.log(scanningResult);

    setShowScanner(false);

    // setItems((prev) => [...prev, scanningResult?.data]);

    // await getGoogleBookByISBN(scanningResult?.data)
    //   .then((response) => {
    //     console.log("response\n\n\n", response?.items[0]?.volumeInfo);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    await fetchByISBN(scanningResult?.data)
      .then((response) => {
        console.log("response in fetchByISBN\n\n", response);
      })
      .catch((error) => {
        console.error(error);
      });
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
