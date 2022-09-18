import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Input, Button, Image } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { Logout } from "../store/actions";

const BASE_URI =
  "https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png";
export default function Profile() {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout());
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back!</Text>
      <Image
        source={{ uri: BASE_URI }}
        containerStyle={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Button
        title="Logout"
        titleStyle={{ fontWeight: "bold", fontSize: 18 }}
        buttonStyle={{
          backgroundColor: "#4cbb17",
          borderRadius: 5,
        }}
        containerStyle={{
          width: 300,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        icon={{
          name: "arrow-right",
          type: "font-awesome",
          size: 15,
          color: "white",
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
        onPress={submit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#DFFBEE",
  },
  buttonStyle: {
    backgroundColor: "#4cbb17",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#0EE310",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    borderRadius: 4,
  },
  image: {
    backgroundColor: "red",
    backgroundSize: "cover",
    width: "100%",
    height: "60%",
    marginTop: 50,
  },
  title: {
    color: "#74C5A1",
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 20,
    textAlign: "center",
  },
});
