import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput as PaperTextInput, Button } from "react-native-paper";
import encryptCesar from "../utils/cesar";

const Cesar = () => {
  const [message, setMessage] = useState("");
  const [decalage, setDecalage] = useState("");
  const [messageCrypte, setMessageCrypte] = useState("");

  const crypter = () => {
    try {
      const decalageValue = parseInt(decalage, 10); // Convertir la chaîne en nombre
      const result = encryptCesar(message, decalageValue);
      setMessageCrypte(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  const dissmissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dissmissKeyboard}>
      <View style={styles.container}>
        <Text style={styles.title}>Chiffrement de Message</Text>
        <Text>Entrer votre message à chiffrer :</Text>
        <PaperTextInput
          label="Message"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Text>Décalage :</Text>
        <PaperTextInput
          label="Décalage"
          value={decalage}
          onChangeText={(text) => setDecalage(text.replace(/[^0-9]/g, ""))}
          keyboardType="numeric"
        />
        <Button mode="contained" onPress={crypter}>
          Chiffrer
        </Button>
        <Text>Résultat : {messageCrypte}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default Cesar;
