import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../styles";

export default function InputTodo({ props }) {
  const { Todo, setTodo, Todos, setTodos } = props;
  return (
    <>
      <Text style={styles.judul}>Silahkan Input Todo</Text>
      <TextInput
        placeholder="Input Todo"
        style={styles.textInputTodo}
        onChangeText={(value) => setTodo(value)}
        value={Todo}
      />
      <View style={styles.containerButton}>
        <Button
          title="Tambah"
          onPress={() => {
            setTodos([...Todos, { id: +new Date(), title: Todo }]);
            setTodo("");
          }}
        />
      </View>
    </>
  );
}
