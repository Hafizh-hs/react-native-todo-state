import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    padding: 10,
  },
  judul: {
    fontSize: 25,
  },
  textInputTodo: {
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginTop: 10,
  },
  containerButton: {
    marginTop: 10,
  },
  textItem: {
    fontSize: 20,
    marginVertical: 10,
    padding: 10,
  },
  containerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
