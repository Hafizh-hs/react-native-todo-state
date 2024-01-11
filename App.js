import { useState } from "react";

import { View, SafeAreaView, FlatList } from "react-native";

import { styles } from "./styles";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

export default function App() {
  const [Todos, setTodos] = useState([]);
  const [Todo, setTodo] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <InputTodo props={{ Todo, setTodo, Todos, setTodos }} />
        <TodoList props={{ Todos, setTodos }} />
      </View>
    </SafeAreaView>
  );
}
