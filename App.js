import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import Menu from "./src/Components/common/Menu";
import React from "react";
import {
  ABeeZee_400Regular,
  useFonts as useAbeezeFonst,
} from "@expo-google-fonts/abeezee";
import {
  Rubik_400Regular,
  useFonts as useRubikFonts,
} from "@expo-google-fonts/rubik";
import * as Rubik from "@expo-google-fonts/rubik";

const Stack = createNativeStackNavigator();

export default function App() {
  const [rubikLoaded, rubikError] = useRubikFonts({
    Rubik_400Regular,
  });
  const [abeezeeLoaded, abeezeError] = useAbeezeFonst({
    ABeeZee_400Regular,
  });
  if (!abeezeeLoaded || !rubikLoaded) {
    return <Text>CARREGANDOOOOOOOO</Text>;
  }

  return (
    <React.Fragment>
      <Menu />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
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
