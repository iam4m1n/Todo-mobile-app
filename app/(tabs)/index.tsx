import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Edit app/index.tsx to edit this screen1234.</Text>
      <Text>hi dude</Text>
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