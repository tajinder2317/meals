import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";
function MealItem({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
}) {
  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate("MealDetail", { mealId: id });
  }

  return (
    <View style={styles.mealItems}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.Image} />
          <Text style={styles.titlee}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
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
  titlee: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  buttonPressed: { opacity: 0.5 },
});
