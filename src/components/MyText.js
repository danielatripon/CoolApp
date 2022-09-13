import { StyleSheet, Text, View } from "react-native";

export default function MyText() {
  return (
    <View>
      <Text style={styles.title}>Welcome to my CoolApp!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#74C5A1",
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 20,
    textAlign: "center",
  },
});
