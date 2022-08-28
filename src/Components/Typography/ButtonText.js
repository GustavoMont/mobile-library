import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Rubik_400Regular } from "@expo-google-fonts/rubik";
import colors from "../../styles/colors";

const ButtonText = ({ color, ...props }) => {
  return <Text style={[styles.buttonText, { color }]}>{props.children}</Text>;
};

export default ButtonText;

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: "Rubik_400Regular",
    fontSize: 16,
    color: colors.black,
    letterSpacing: 1.25,
  },
});
