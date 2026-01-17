import { View, Text, Pressable, Platform, StyleSheet } from "react-native";

export default function CategoryGridTile({ title, color, onPress   }) {
  return (
    <View style={styles.gridConatainer}>
      <Pressable
        android_ripple={{ color: "#ccc", foreground: true }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, , { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  gridConatainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: "black",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontFamily: "serif",
    fontSize: 16,
  },
});
