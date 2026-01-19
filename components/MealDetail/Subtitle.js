import { View, Text, StyleSheet } from "react-native";
export default function Subtitle({ children }) {
  return (
    <>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subTitle}>{children}</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  subTitle: {
    color: "rgb(236, 178, 178)",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subtitleContainer: {
    margin: 4,
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "rgb(163, 139, 139)",
    borderBottomWidth: 2,
  },
});
