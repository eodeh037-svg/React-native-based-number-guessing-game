import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function WelcomeScreen() {
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
        <Text className="text-white text-3xl font-bold mb-4 text-center">
          🎮 Guess the Number
        </Text>

        {/* Description */}
        <Text className="text-gray-300 text-center leading-6 mb-10">
          Welcome to Guess the Number 🎮{"\n\n"}
          Get ready for a fun and simple challenge where your goal is to guess
          the correct number between 1 and 10.{"\n\n"}
          This game will test your intuition, focus, and luck. You will get hints
          after each guess to guide you closer to the answer.{"\n\n"}
          Think you’ve got what it takes? Let’s begin!
        </Text>

        {/* Button */}
        <TouchableOpacity
          onPress={() => router.push("/")}
          className="bg-blue-500 w-[70%] py-4 rounded-2xl"
        >
          <Text className="text-white text-center font-bold text-lg">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}