import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyle from "../styles/common";

const Home = () => {
  return (
    <SafeAreaView style={commonStyle.screenContainer}>
      <View>
        <Text style={commonStyle.heading2}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
