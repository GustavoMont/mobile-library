import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import colors from "../../styles/colors";
import useMenu from "../../data/Hooks/useMenu";

const MenuButton = ({ renderIcon, buttonId, rules, ...props }) => {
  const { activeScreen } = useMenu();

  function handleActiveButton(buttonId) {
    return {
      backgroundColor:
        colors[activeScreen === buttonId ? "white" : "transparent"],
    };
  }

  function handleIconStatus({ needAuth, isAuth }, buttonId) {
    const color = activeScreen === buttonId ? colors.primary : colors.white;
    if (!needAuth) {
      return { color };
    }
    return { color: isAuth ? color : colors.primary };
  }

  return (
    <React.Fragment>
      <TouchableOpacity
        style={[styles.menuButtons, handleActiveButton(buttonId)]}
      >
        {renderIcon(handleIconStatus(rules, buttonId))}
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  menuButtons: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
