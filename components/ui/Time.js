import { Text, View, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import ColorPalette from "../../constants/ColorPalette";

export default function Time({ time }) {
  return (
    <View style={styles.timeContainer}>
      <Icon name="access-time" size={14} color={ColorPalette.grey[500]} />
      <Text style={styles.timeText}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timeContainer: {
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    color: ColorPalette.grey[600],
    marginLeft: 2,
    lineHeight: 18,
  },
});
