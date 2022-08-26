import { StyleSheet } from "react-native";
import colors from "./colors";

const commonStyle = StyleSheet.create({
  screenPadding: {
    paddingHorizontal: 24,
  },
  screenContainer: {
    paddingVertical: 24,
    backgroundColor: colors.lightWhite,
    flex: 1,
  },
  heading2: {
    fontSize: 24,
  },
});

export default commonStyle;
