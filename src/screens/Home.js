import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import MyText from "../components/MyText";
import { Image } from "@rneui/themed";
import { SearchBar } from "@rneui/themed";

const BASE_URI =
  "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg";

export default function Home() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <View style={styles.container}>
      <MyText> Welcome to my CoolApp!</MyText>
      <View style={styles.searchBar}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
        />
      </View>
      <Image
        source={{ uri: BASE_URI }}
        containerStyle={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFFBEE",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#0EE310",
  },
  image: {
    backgroundColor: "red",
    backgroundSize: "cover",
    width: "100%",
    height: "60%",
    marginTop: 50,
  },
  searchBar: {
    width: "90%",
  },
});
