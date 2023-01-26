import { MEALS } from "../data/dummy-data";
import { Text, StyleSheet, View } from "react-native";

export default function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
