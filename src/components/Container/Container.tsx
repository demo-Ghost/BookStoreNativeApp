import { StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "../../styles/colors";

const Container = ({
  children,
  style,
}: {
  children: React.ReactNode | React.ReactNode[];
  style?: ViewStyle;
}) => {
  return (
    <View style={{ ...defaultStyles.container, ...style }}>{children}</View>
  );
};

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});

export default Container;
