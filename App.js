import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import Menu from "./src/Components/common/Menu";
import React from "react";
import MenuProvider from "./src/data/Providers/MenuProvider";
import Loading from "./src/Screens/Loading";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <React.Fragment>
      <MenuProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="splash" component={Loading} />
            <Stack.Screen name="home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
        <Menu />
      </MenuProvider>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
