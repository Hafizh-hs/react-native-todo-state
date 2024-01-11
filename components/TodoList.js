import { FlatList } from "react-native";
import TodoItem from "./TodoItem";

export default function TodoList({ props }) {
  const { Todos, setTodos } = props;
  return (
    <FlatList
      data={Todos}
      renderItem={({ item }) => <TodoItem props={{ item, Todos, setTodos }} />}
      keyExtractor={(item) => item.id}
    />
  );
}
