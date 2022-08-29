import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../../styles/colors";

const { width } = Dimensions.get("window");

const AnimatedLine = Animated.createAnimatedComponent(LinearGradient);

const Box = ({ outStyle }) => {
  const xPosition = useSharedValue(0);
  useEffect(() => {
    xPosition.value = withRepeat(withTiming(1, { duration: 3000 }), -1);
  }, []);
  const animationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(xPosition.value, [0, 1], [-width, width]),
      },
    ],
  }));

  return (
    <View style={[styles.box, outStyle]}>
      <AnimatedLine
        colors={["transparent", colors.white, "transparent"]}
        style={[styles.line, animationStyle]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 280,
    backgroundColor: "#cbd5e1",
    borderRadius: 8,
    overflow: "hidden",
  },
  line: {
    ...StyleSheet.absoluteFillObject,
  },
});
