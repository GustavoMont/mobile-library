import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyle from "../styles/common";
import H4 from "../Components/Typography/H4";
import requester from "../config/axios";
import Book from "../Components/common/Book";
import colors from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import useMenu from "../data/Hooks/useMenu";

const Home = () => {
  const { handleActiveScreen } = useMenu();

  const [books, setBooks] = useState([
    {
      title: "",
      author: "",
      id: NaN,
    },
  ]);

  useEffect(() => {
    handleActiveScreen("home");
  }, []);

  useEffect(() => {
    async function getBooks() {
      try {
        const { data: books } = await requester.get("books/");
        setBooks(books);
      } catch (error) {
        console.log(error.message);
      }
    }
    getBooks();
  }, []);

  return (
    <SafeAreaView
      style={[commonStyle.screenContainer, commonStyle.screenPadding]}
    >
      <TouchableOpacity>
        <View style={styles.avatar}>
          <MaterialIcons name="person" size={24} color={colors.white} />
        </View>
      </TouchableOpacity>
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
  avatar: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
    marginBottom: 24,
  },
});
