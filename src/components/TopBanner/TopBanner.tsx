import { Image, StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "../../styles/colors";

const TopBanner = ({ style }: { style?: ViewStyle }) => {
  return (
    <View style={{ ...styles.imageContainer, ...style }}>
      <Image
        style={styles.image}
        source={require("../../../assets/promo_banner.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "#f57f24",
  },
  image: {
    height: 150,
    width: undefined,
    resizeMode: "contain",
  },
});

export default TopBanner;
