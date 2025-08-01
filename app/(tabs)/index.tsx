import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme();


  const addTodo = useMutation(api.todos.addTodo)
  const clearAllTodos = useMutation(api.todos.clearAllTodos)
  const todos = useQuery(api.todos.getTodos)
  console.log()
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Edit app/index.tsx to edit this screen1234.</Text>
      <Text>hi dude</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>
          toggle the mode
        </Text>  
        </TouchableOpacity>
      <TouchableOpacity onPress={() => addTodo({text: "learn python"})}>
        <Text>
          Add a new todo
        </Text>  
        </TouchableOpacity>
    <TouchableOpacity onPress={() => clearAllTodos()}>
        <Text>
          Clear All
        </Text>  
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
        flex: 1,
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      },
  content: {
    fontSize: 10
  }
})