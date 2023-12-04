import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.title}>Accueil</Text>
      <TouchableOpacity style={styles.cesar} onPress={() => null}>
        <Text>Chiffrement de César</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 64,
  },
  cesar: {
    fontSize: 32,
  },
});

export default Home;
