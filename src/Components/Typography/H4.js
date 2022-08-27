import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";

const H4 = ({ color, ...props }) => {
  return <Text style={[styles.h4, { color }]}>{props.children}</Text>;
};

export default H4;

const styles = StyleSheet.create({
  h4: {
    fontFamily: "ABeeZee_400Regular",
    fontSize: 24,
    letterSpacing: 0.25,
    color: colors.black,
  },
});
