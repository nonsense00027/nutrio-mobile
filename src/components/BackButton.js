import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function BackButton({ action }) {
  return (
    <TouchableOpacity
      style={styles.back}
      activeOpacity={0.5}
      onPress={() => action()}
    >
      <AntDesign name="arrowleft" size={30} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  back: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    borderWidth: 1,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
});
