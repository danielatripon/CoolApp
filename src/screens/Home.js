import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MyText from "../components/MyText";
import MyButton from "../components/MyButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <MyText></MyText>
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
