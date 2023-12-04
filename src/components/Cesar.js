import React from "react";
import { View, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

const Cesar = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Chiffrement de Cesar</Text>
        <Text>Texte à saisir</Text>
        <TextInput
          style={styles.inp}
          placeholder="Entrez votre message à cripter"
        />
        <Text>Décalage à choisir</Text>
        <TextInput
          style={styles.inp}
          placeholder="Entre 0 et 25"
          keyboardType="numeric"
        />
        <Text style={{ color: "red" }}>Message cripter : </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inp: {
    height: 40,
    width: "50%",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    paddingLeft: 8,
  },
});

export default Cesar;
