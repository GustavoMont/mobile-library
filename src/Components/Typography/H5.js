import { StyleSheet, Text, View } from "react-native";
import React from "react";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

const H5 = ({ color, ...props }) => {
  return <Text style={[styles.h5, { color }]}>{props.children}</Text>;
};

export default H5;

const styles = StyleSheet.create({
  h5: {
    fontFamily: fonts.title,
    fontSize: 20,
    color: colors.black,
  },
});
