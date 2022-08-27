import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyle from "../styles/common";
import H4 from "../Components/Typography/H4";
import requester from "../config/axios";
import Book from "../Components/common/Book";
import colors from "../styles/colors";

const Home = () => {
  const [books, setBooks] = useState([
    {
      title: "",
      author: "",
      id: NaN,
    },
  ]);
  useEffect(() => {
    (async () => {
      try {
        const { data: books } = await requester.get("books/");
        setBooks(books);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  return (
    <SafeAreaView
      style={[commonStyle.screenContainer, commonStyle.screenPadding]}
    >
      <H4 color={colors.primary}>Livros Disponíveis</H4>
      <View>
        <FlatList
          style={styles.bookListContainer}
          data={books}
          renderItem={({ item: book, index }) => (
            <Book book={book} index={index} />
          )}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  bookListContainer: {
    marginTop: 24,
  },
});
