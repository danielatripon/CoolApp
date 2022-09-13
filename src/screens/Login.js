import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import MyText from "../components/MyText";
import MyButton from "../components/MyButton";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <StatusBar style="auto" />
      <MyButton buttonText="Press This"></MyButton>
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
});
