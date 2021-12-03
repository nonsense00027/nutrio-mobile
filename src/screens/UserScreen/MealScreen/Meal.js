import React from "react";
import styles from "./styles";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../shared/theme/Colors";
import Suggested from "./Suggested";
import { useAuthContext } from "../../../context/AuthContext";
import { getTER, getExchanges } from "../../../shared/utilities";

export default function Meal() {
  const { user } = useAuthContext();

  const exchanges = getExchanges(user.height, "PHL", user.lifestyle)[0];
  const energy = getExchanges(user.height, "PHL", user.lifestyle)[1];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={styles.meal}>
          <View style={styles.meal__header}>
            <Text style={styles.meal__headerText}>Your Meal Plan</Text>
            <Text style={{ opacity: 0.7, fontWeight: "500" }}>
              You may follow the number of exchanges.
            </Text>
          </View>
          <View style={styles.meal__ter}>
            <View style={styles.meal__terOverlay}></View>
            <View style={styles.meal__terLeft}>
              <Text style={styles.meal__terLeftTitle}>Your total kcal:</Text>
              <Text style={styles.meal__terLeftValue}>
                {getTER(user.height, "PHL", user.lifestyle)}
              </Text>
            </View>
            <View style={styles.meal__terRight}>
              <TouchableOpacity
                style={styles.meal__generateButton}
                activeOpacity={0.7}
              >
                <Text style={styles.meal__terRightTitle}>Generate</Text>
                <MaterialCommunityIcons
                  name="play"
                  size={24}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.meal__exchanges}>
            <View style={styles.meal__exchangesRow}>
              <View style={styles.meal__exchangesColumn}>
                <Text style={styles.meal__exchangesTitle}>No. of rice</Text>
                <Text style={styles.meal__exchangesValue}>
                  {exchanges.rice}
                </Text>
              </View>
              <View style={styles.meal__exchangesColumn}>
                <Text style={styles.meal__exchangesTitle}>No. of meat</Text>
                <Text style={styles.meal__exchangesValue}>
                  {exchanges.meat}
                </Text>
              </View>
              <View style={styles.meal__exchangesColumn}>
                <Text style={styles.meal__exchangesTitle}>No. of milk</Text>
                <Text style={styles.meal__exchangesValue}>
                  {exchanges.milk}
                </Text>
              </View>
            </View>
            <View style={styles.meal__exchangesRow}>
              <View style={styles.meal__exchangesColumn}>
                <Text style={styles.meal__exchangesTitle}>
                  No. of vegetables
                </Text>
                <Text style={styles.meal__exchangesValue}>
                  {exchanges.vegetable}
                </Text>
              </View>
              <View style={styles.meal__exchangesColumn}>
                <Text style={styles.meal__exchangesTitle}>No. of fruit</Text>
                <Text style={styles.meal__exchangesValue}>
                  {exchanges.fruit}
                </Text>
              </View>
              <View style={styles.meal__exchangesColumn}>
                <Text style={styles.meal__exchangesTitle}>No. of fat</Text>
                <Text style={styles.meal__exchangesValue}>{exchanges.fat}</Text>
              </View>
            </View>
          </View>

          <Suggested />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
