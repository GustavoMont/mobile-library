import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";

const Overline = ({ color, ...props }) => {
  return <Text style={[{ color }]}>{props.children}</Text>;
};

export default Overline;

const styles = StyleSheet.create({});
