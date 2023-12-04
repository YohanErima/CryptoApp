import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cesar from "./src/components/Cesar";
import Home from "./src/components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
