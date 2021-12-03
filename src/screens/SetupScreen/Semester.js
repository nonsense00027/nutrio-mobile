import React, { useState } from "react";
import styles from "./styles";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Stepper from "../../components/Stepper/Stepper";
import BackButton from "../../components/BackButton";
import { Button } from "react-native-elements";

const semesters = [
  {
    id: 1,
    name: "First Trimester",
    type: "The first day of your last period and lasts until the end of week 12.",
  },
  {
    id: 2,
    name: "Second Trimester",
    type: "From week 13 to the end of week 26.",
  },
  {
    id: 3,
    name: "Third Trimester",
    type: "From week 29 to week 40 - months seven, eight and nine.",
  },
];
export default function Semester({ navigation, route }) {
  const { age, height, weight } = route.params;
  const [semester, setSemester] = useState(1);
  return (
    <View style={styles.container}>
      <Stepper max={5} active={4} />
      <View style={styles.back__container}>
        <BackButton action={() => navigation.pop()} />
      </View>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <Text style={styles.title}>What stage of pregnancy are you?</Text>
        <View>
          {semesters.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.5}
              style={
                semester === item.id
                  ? styles.semester__cardActive
                  : styles.semester__card
              }
              onPress={() => setSemester(item.id)}
            >
              <Text
                style={
                  semester === item.id
                    ? styles.semester__cardTitleActive
                    : styles.semester__cardTitle
                }
              >
                {item.name}
              </Text>
              <Text
                style={
                  semester === item.id
                    ? styles.semester__cardTypeActive
                    : styles.semester__cardType
                }
              >
                {item.type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Button
          title="Next"
          buttonStyle={styles.age__nextButton}
          titleStyle={styles.age__nextButtonLabel}
          // disabled={!noEmpty()}
          // loading={loading}
          onPress={() =>
            navigation.navigate("Lifestyle", { age, height, weight, semester })
          }
        />
      </View>
    </View>
  );
}
