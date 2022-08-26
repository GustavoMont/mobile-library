import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import commonStyle from "../../styles/common";
import colors from "../../styles/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";

const Menu = () => {
  return (
    <SafeAreaView>
      <View style={[commonStyle.screenContainer, styles.navbar]}>
        <TouchableOpacity>
          <View style={styles.avatar}>
            <AntDesign name="user" size={16} color={colors.darkSecondary} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="menu" size={24} color={colors.white} />
        </TouchableOpacity>
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
    backgroundColor: colors.primary,
    paddingVertical: 16,
  },
  avatar: {
    backgroundColor: colors.white,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
  },
});
