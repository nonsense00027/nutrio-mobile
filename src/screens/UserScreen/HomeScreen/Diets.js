import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const data = [
  {
    id: 0,
    name: "sample",
  },
  {
    id: 2,
    name: "sample",
  },
  {
    id: 3,
    name: "sample",
  },
];
export default function Diets() {
  const renderItem = ({ item }) => <View style={styles.suggested__card}></View>;

  return (
    <View style={styles.suggested}>
      <Text style={styles.title}>Know more about different diets</Text>
      <View style={styles.suggested__lists}>
        <FlatList
          ItemSeparatorComponent={() => (
            <View style={{ width: 10, backgroundColor: "transparent" }} />
          )}
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  suggested: {
    marginTop: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  suggested__lists: {
    flexDirection: "row",
    marginVertical: 20,
  },
  suggested__card: {
    width: 120,
    height: 120,
    backgroundColor: "#EFF7EE",
    borderRadius: 30,
  },
});
