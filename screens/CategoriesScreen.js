import { FlatList, View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
        navigation={navigation}
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
      />
    </View>
  );
}
export default CategoriesScreen;

const styles = StyleSheet.create({
  catScreenContainer: {
    flex: 1,
    padding: 16,
    // backgroundColor: "black",
  },

  listContainer: {
    flex: 1,
  },
});
