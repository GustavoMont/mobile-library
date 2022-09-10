import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BookScreen = ({ route, navigation }) => {
  const { id, color } = route.params;

  return (
    <View>
      <Text>Book: {id}</Text>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({});
