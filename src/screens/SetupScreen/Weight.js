import React, { useState } from "react";
import styles from "./styles";
import { Text, View, TextInput } from "react-native";
import Stepper from "../../components/Stepper/Stepper";
import BackButton from "../../components/BackButton";
import { Button } from "react-native-elements";

export default function Weight({ navigation, route }) {
  const { age, height } = route.params;
  const [weight, setWeight] = useState("");

  return (
    <View style={styles.container}>
      <Stepper max={5} active={3} />
      <View style={styles.back__container}>
        <BackButton action={() => navigation.pop()} />
      </View>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <Text style={styles.title}>What’s your current weight?</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <TextInput
            style={styles.age__input}
            placeholder="45"
            autoFocus
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            value={weight}
            onChangeText={(val) => setWeight(val)}
          />
          <Text
            style={{
              opacity: 0.3,
              fontSize: 20,
              marginBottom: 10,
              marginLeft: 5,
            }}
          >
            kg
          </Text>
        </View>
        <Button
          title="Next"
          buttonStyle={styles.age__nextButton}
          titleStyle={styles.age__nextButtonLabel}
          // disabled={!noEmpty()}
          // loading={loading}
          onPress={() =>
            navigation.navigate("Semester", { age, height, weight })
          }
        />
      </View>
    </View>
  );
}
