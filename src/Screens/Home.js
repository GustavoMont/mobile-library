import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyle from "../styles/common";
import H4 from "../Components/Typography/H4";

const Home = () => {
  return (
    <SafeAreaView
      style={[commonStyle.screenContainer, commonStyle.screenPadding]}
    >
      <H4 color={"primary"}>Livros Disponíveis</H4>
      <View>
        <Text style={commonStyle.heading2}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
