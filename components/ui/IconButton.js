import { Pressable, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import ColorPalette from "../../constants/ColorPalette";

export default function IconButton({ icon, size = 24, color, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Icon name={icon} size={size} color={ColorPalette.primary.main} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
