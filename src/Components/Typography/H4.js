import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";

const H4 = ({ color, ...props }) => {
  return (
    <Text style={[{ color: colors[color || "black"] }, styles.h4]}>
      {props.children}
    </Text>
  );
};

export default H4;

const styles = StyleSheet.create({
  h4: {
    fontFamily: "ABeeZee_400Regular",
    fontSize: 24,
    letterSpacing: 0.25,
  },
});
