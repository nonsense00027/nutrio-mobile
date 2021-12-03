import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../shared/theme/Colors";
import article from "../../../img/article.png";

export default function Articles() {
  return (
    <View style={styles.articles}>
      <LinearGradient
        colors={["rgba(115, 219, 127, 0.5)", "#FFF8EB"]}
        style={styles.card}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <View style={styles.card__left}>
          <Text style={styles.card__leftTitle}>ARTICLE</Text>
          <Text style={styles.card__leftSubtitle}>
            What you need to know about your food.
          </Text>
          <TouchableOpacity style={styles.card__button} activeOpacity={0.7}>
            <Text style={styles.card__buttonText}>Read now</Text>
            <MaterialCommunityIcons name="play" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.card__right}>
          <Image
            resizeMode="contain"
            style={{ height: 80, width: 80 }}
            source={article}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  articles: {
    marginVertical: 20,
  },
  card: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  card__left: {
    flex: 1,
  },
  card__leftTitle: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
  card__leftSubtitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 5,
  },
  card__right: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card__button: {
    marginTop: 10,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 7,
  },
  card__buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
