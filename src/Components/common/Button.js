import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";

const Button = ({ color, style, onPress, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: colors[color || "primary"] },
        style,
      ]}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flex: 1,
    borderRadius: 4,
    alignItems: "center",
  },
});
