import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const Overline = ({ color, ...props }) => {
  return <Text style={[styles.overline, { color }]}>{props.children}</Text>;
};

export default Overline;

const styles = StyleSheet.create({
  overline: {
    fontFamily: fonts.body,
    fontSize: 10,
    letterSpacing: 1.5,
    color: colors.black,
  },
});
