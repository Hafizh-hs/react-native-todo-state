import { View, Text, Pressable } from "react-native";

import { Feather } from "@expo/vector-icons";

import { styles } from "../styles";

export default function TodoItem({ props }) {
  const { item, Todos, setTodos } = props;
  return (
    <View style={styles.containerItem}>
      <Text style={styles.textItem}>{item.title}</Text>
      <Pressable
        onPress={() => {
          setTodos(Todos.filter((todo) => todo.id !== item.id));
        }}
      >
        <Feather name="trash-2" size={24} color="black" />
      </Pressable>
    </View>
  );
}
