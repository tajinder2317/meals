import { View, Text, Pressable, Image, StyleSheet } from "react-native";
function MealItem({ title, imageUrl, duration, affordability, complexity }) {
  return (
    <View style={styles.mealItems}>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.Image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text>{duration} mins</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  Image: {
    width: "100%",
    height: 200,
  },
  mealItems: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
