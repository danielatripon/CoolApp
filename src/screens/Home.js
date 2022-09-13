import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import MyText from "../components/MyText";
import { Image } from "@rneui/themed";

const BASE_URI =
  "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg";

export default function Home() {
  return (
    <View style={styles.container}>
      <MyText></MyText>

      <Image
        source={{ uri: BASE_URI }}
        containerStyle={styles.item}
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
  item: {
    backgroundColor: "red",
    backgroundSize: "cover",
    width: "100%",
    height: "60%",
  },
});
