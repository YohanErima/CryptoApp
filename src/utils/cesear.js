export default function encryptCesar(message, shift) {
  if (typeof message !== "string" || typeof shift !== "number") {
    throw new Error(
      "Invalid input. Message should be a string and shift should be a number."
    );
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const upperCaseMessage = message.toUpperCase();
  let encryptedMessage = "";

  for (let i = 0; i < upperCaseMessage.length; i++) {
    const char = upperCaseMessage[i];

    if (char === " ") {
      // Ignore spaces
      encryptedMessage += " ";
    } else {
      const charIndex = alphabet.indexOf(char);
      const encryptedIndex = (charIndex + shift) % 26; // Wrap around if necessary
      encryptedMessage += alphabet[encryptedIndex];
    }
  }

  return encryptedMessage;
}
