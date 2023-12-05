export default function encryptCesar(message, decalage) {
  if (typeof message !== "string" || typeof decalage !== "number") {
    throw new Error("Veuillez entrer un string et un number !");
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const upperCaseMessage = message.toUpperCase();
  let messageCripte = "";

  for (let i = 0; i < upperCaseMessage.length; i++) {
    const char = upperCaseMessage[i];

    if (char === " ") {
      messageCripte += " ";
    } else {
      const charIndex = alphabet.indexOf(char);
      const encryptedIndex = (charIndex + decalage) % 26;
      messageCripte += alphabet[encryptedIndex];
    }
  }

  return messageCripte;
}
