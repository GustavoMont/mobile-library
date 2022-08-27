import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import commonStyle from "../../styles/common";
import colors from "../../styles/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import MenuButton from "./MenuButton";
const Menu = () => {
  return (
    <SafeAreaView>
      <View style={[commonStyle.screenPadding, styles.navbar]}>
        <MenuButton
          rules={{ neeAuth: false }}
          renderIcon={(style) => (
            <FontAwesome size={24} name="home" style={style} />
          )}
          buttonId={"home"}
        />
        <MenuButton
          rules={{ needAuth: true, isAuth: true }}
          buttonId="loans"
          renderIcon={(style) => (
            <FontAwesome name="bookmark" size={24} style={style} />
          )}
        />
        <MenuButton
          rules={{ needAuth: true, isAuth: true }}
          buttonId="list"
          renderIcon={(style) => (
            <FontAwesome name="list" size={24} style={style} />
          )}
        />

        {/* <TouchableOpacity
          style={[styles.menuButtons, handleActiveButton("loans")]}
        >
          <FontAwesome
            name="bookmark"
            size={24}
            style={[
              handleIconStatus({ needAuth: true, isAuth: false }, "loans"),
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButtons, handleActiveButton("list")]}
        >
          <FontAwesome
            name="bookmark"
            size={24}
            style={[
              handleIconStatus({ needAuth: true, isAuth: false }, "list"),
            ]}
          />
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.darkPrimary,
    paddingVertical: 16,
  },
});
