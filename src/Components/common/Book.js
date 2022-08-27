import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";
import Overline from "../Typography/Overline";
import H4 from "../Typography/H4";
import generateColorSequence, {
  removeColors,
} from "../../functions/generatRandomColor";

const Book = ({ book, index, ...props }) => {
  return (
    <View
      style={[
        {
          backgroundColor: generateColorSequence(
            colors,
            removeColors(colors, "white"),
            index
          ),
        },
        styles.cover,
      ]}
    >
      <H4 color={colors.white}>{book.title}</H4>
      <View style={{ position: "absolute", bottom: 8 }}>
        <Overline color={colors.white}>{book.author}</Overline>
      </View>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  cover: {
    width: 181,
    height: 232,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});
