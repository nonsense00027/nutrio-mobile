import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../shared/theme/Colors";

export default function Stepper({ max, active }) {
  return (
    <View style={styles.stepper}>
      {Array.from(Array(active).keys()).map((item) => (
        <View
          key={item}
          style={{
            height: 3,
            flex: 1,
            backgroundColor: Colors.primary,
            marginHorizontal: 4,
          }}
        ></View>
      ))}
      {Array.from(Array(max - active).keys()).map((item) => (
        <View
          key={item}
          style={{
            height: 3,
            flex: 1,
            marginHorizontal: 4,
            backgroundColor: "#e6e6e6",
          }}
        ></View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  stepper: {
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
