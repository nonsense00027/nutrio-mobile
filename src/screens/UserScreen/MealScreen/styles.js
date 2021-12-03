import { StyleSheet } from "react-native";
import Colors from "../../../shared/theme/Colors";

export default StyleSheet.create({
  meal: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 90,
  },
  meal__header: {
    marginTop: 20,
  },
  meal__headerText: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 26,
    marginBottom: 5,
  },
  meal__ter: {
    backgroundColor: Colors.primary,
    borderRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    position: "relative",
    overflow: "hidden",
  },
  meal__terOverlay: {
    position: "absolute",
    right: -30,
    top: -70,
    backgroundColor: "#fff",
    height: 180,
    width: 200,
    opacity: 0.3,
    borderRadius: 170 / 2,
  },
  meal__terLeftTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  meal__terLeftValue: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 28,
  },
  meal__terLeft: {
    flex: 0.6,
    justifyContent: "center",
    // alignItems: "center",
  },
  meal__terRight: {
    flex: 0.4,
  },
  meal__generateButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 7,
  },
  meal__terRightTitle: {
    color: Colors.primary,
  },
  meal__exchangesRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  meal__exchangesColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EEF0F7",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 25,
    margin: 5,
    height: 100,
  },
  meal__exchangesColumnTop: {
    flex: 0.4,
  },
  meal__exchangesColumnBottom: {
    flex: 1,
  },
  meal__exchangesTitle: {
    fontSize: 12,
    textAlign: "center",
  },
  meal__exchangesValue: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 5,
  },
});
