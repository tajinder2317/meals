import { FlatList, View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
        navigation.navigate('MealsOverview');
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <View style={styles.catScreenContainer}>
      <FlatList
        style={styles.listContainer}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        overScrollMode="never"
        scrol
      />
    </View>
  );
}
export default CategoriesScreen;

const styles = StyleSheet.create({
  catScreenContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "black",
  },

  listContainer: {
    flex: 1,
  },
});
