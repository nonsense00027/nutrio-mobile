import { StyleSheet } from "react-native";
import Colors from "../../../shared/theme/Colors";

export default StyleSheet.create({
  home: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    alignItems: "center",
    marginVertical: 10,
  },
  header__title: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 26,
  },
  header__subtitle: {
    fontSize: 15,
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
});
