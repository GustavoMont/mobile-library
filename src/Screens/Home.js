import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
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
import SkeletonBox from "../Components/common/skeletons/Box";
import Button from "../Components/common/Button";
import ButtonText from "../Components/Typography/ButtonText";

const Home = ({ navigation }) => {
  const { handleActiveScreen } = useMenu();
  const [books, setBooks] = useState([]);
  const placeHolderList = Array.from({ length: 8 }, () => {
    id: Math.floor(Math.random() * 40);
  });
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    handleActiveScreen("home");
  }, []);

  function navigate(to = "", options = {}) {
    navigation.navigate(to, options);
  }

  useEffect(() => {
    async function getBooks() {
      try {
        const { data: books } = await requester.get("books/");
        setBooks(books);
        setisLoading(false);
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
      <ScrollView>
        <FlatList
          style={styles.bookListContainer}
          data={isLoading ? placeHolderList : books}
          renderItem={({ item: book, index }) =>
            isLoading ? (
              <SkeletonBox
                outStyle={{ width: 222, height: 282, borderRadius: 4 }}
              />
            ) : (
              <Book
                book={book}
                index={index}
                onPress={() =>
                  navigate("book", {
                    id: book.id,
                    otherParam: "anything you want here",
                  })
                }
              />
            )
          }
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ marginTop: 32 }}>
          <H4 color={colors.primary}>Aproveite nosso app!</H4>
          <View style={{ marginTop: 32 }}>
            <Button onPress={() => navigate("login")}>
              <ButtonText color={colors.white}>Faça login</ButtonText>
            </Button>
            <Button
              color={"secondary"}
              style={{ marginTop: 16 }}
              onPress={() => navigate("signup")}
            >
              <ButtonText color={colors.white}>Cadastre-se</ButtonText>
            </Button>
          </View>
        </View>
      </ScrollView>
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
