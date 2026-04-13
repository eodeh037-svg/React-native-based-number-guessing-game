import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";



export default function App() {
  const [randomNumber] = useState<number>(
    Math.floor(Math.random() * 10) + 1
  );
  const [guess, setGuess] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const checkGuess = () => {
    const num = parseInt(guess);

    if (!num) {
      setMessage("Enter a valid number");
      Alert.alert("you entered an invalid number ")
      return;
    }

    if (num > randomNumber) {
      setMessage("Too high 📉");
    } else if (num < randomNumber) {
      setMessage("Too low 📈");
    } else {
      setMessage("Correct 🎉 You Win!");
      Alert.alert("you got it",
        "keep playing  ")
    }

    setGuess("");
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
      }}
      className="flex-1"
      resizeMode="cover"
    >
      {/* Dark overlay */}
      <View className="flex-1 bg-black/60 items-center justify-center px-6">

        {/* Title */}
        <Text className="text-white text-3xl font-bold mb-2">
          🎮 Guess the Number
        </Text>

        <Text className="text-gray-300 mb-8 text-center">
          Pick a number between 1 - 10
        </Text>

        {/* Card */}
        <View className="w-full bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md">

          {/* Input */}
          <TextInput
            value={guess}
            onChangeText={setGuess}
            placeholder="Enter your guess"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            className="bg-white/20 text-white p-4 rounded-xl mb-4"
          />

          {/* Button */}
          <TouchableOpacity
            onPress={checkGuess}
            className="bg-blue-500 p-4 rounded-xl"
          >
            <Text className="text-white text-center font-bold">
              Check Answer
            </Text>
          </TouchableOpacity>

          {/* Message */}
          {message !== "" && (
            <Text className="text-white text-center mt-5 text-lg font-semibold">
              {message}
            </Text>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}
