// React Native
import { StyleSheet } from "react-native";
// Components
import { Text, View } from "../components/Themed";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
