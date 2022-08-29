import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import colors from "../styles/colors";
import LogoImage from "../../assets/images/Logo.png";
import {
  ABeeZee_400Regular,
  useFonts as useAbeezeFonst,
} from "@expo-google-fonts/abeezee";
import {
  Rubik_400Regular,
  useFonts as useRubikFonts,
} from "@expo-google-fonts/rubik";
import * as Rubik from "@expo-google-fonts/rubik";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const AnimatedLogo = Animated.createAnimatedComponent(Image);

const Loading = () => {
  const logoScale = useSharedValue(0.9);
  const navigate = useNavigation();

  const [rubikLoaded, rubikError] = useRubikFonts({
    Rubik_400Regular,
  });
  const [abeezeeLoaded, abeezeError] = useAbeezeFonst({
    ABeeZee_400Regular,
  });

  const logoAnimationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: logoScale.value,
      },
    ],
    opacity: interpolate(logoScale.value, [0.8, 1.2], [0, 1]),
  }));

  useEffect(() => {
    logoScale.value = withTiming(1.2, { duration: 2800 }, () => {
      "worklet";
      navigate.navigate("home");
    });
  }, []);

  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={[styles.ball, styles.upBall]} />
      <AnimatedLogo
        source={LogoImage}
        style={[styles.logo, logoAnimationStyle]}
        resizeMode="cover"
      />
      <View style={[styles.ball, styles.downBall]} />
    </SafeAreaView>
  );
};

RTCPeerConnection;

export default Loading;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  ball: {
    width,
    height: width,
    borderRadius: width / 2,
    position: "absolute",
  },
  upBall: {
    backgroundColor: colors.lightPrimary,
    right: -(width / 2),
    top: -(width / 4),
  },
  downBall: {
    backgroundColor: colors.lightSecondary,
    left: -(width / 2),
    bottom: -(width / 4),
  },
  logo: {
    width: width / 2,
    transform: [
      {
        scale: 0.8,
      },
    ],
  },
});
