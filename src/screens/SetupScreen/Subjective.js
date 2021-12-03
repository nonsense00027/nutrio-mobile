import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Stepper/Header";
import Stepper from "../../components/Stepper/Stepper";

export default function Subjective() {
  return (
    <View>
      <Header title="Subjective Data" number={2} />
      <Stepper max={4} active={1} />
      <Text>S</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
