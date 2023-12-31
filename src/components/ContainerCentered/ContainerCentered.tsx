import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

const ContainerCentered = ({
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ContainerCentered;
