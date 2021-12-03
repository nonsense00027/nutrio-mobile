import React, { useState } from "react";
import styles from "./styles.js";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import Stepper from "../../components/Stepper/Stepper";
import BackButton from "../../components/BackButton.js";

export default function Age({ navigation }) {
  const [age, setAge] = useState("");

  return (
    <View style={styles.container}>
      <Stepper max={5} active={1} />
      <View style={styles.back__container}>{/* <BackButton /> */}</View>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <Text style={styles.title}>How old are you?</Text>
        <View style={{ alignItems: "center" }}>
          <TextInput
            style={styles.age__input}
            placeholder="20"
            autoFocus
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            value={age}
            onChangeText={(val) => setAge(val)}
          />
        </View>
        <Button
          title="Next"
          buttonStyle={styles.age__nextButton}
          titleStyle={styles.age__nextButtonLabel}
          // disabled={!noEmpty()}
          // loading={loading}
          onPress={() => navigation.navigate("Height", { age })}
        />
      </View>
    </View>
  );
}
