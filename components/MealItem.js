import { View, Text, Pressable, Image, StyleSheet } from "react-native";
function MealItem({ title, imageUrl, duration, affordability, complexity }) {
  return (
    <View style={styles.mealItems}>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.Image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration} mins</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
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
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
