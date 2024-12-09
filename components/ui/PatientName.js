import { Text, View, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import ColorPalette from "../../constants/ColorPalette";

export default function PatientName({ name, customId }) {
  return (
    <View style={styles.patientContainer}>
      <Icon name="person" size={16} color={ColorPalette.grey[800]} />
      <Text style={styles.patientName}>{`${name} #${customId}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  patientContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  patientName: {
    color: ColorPalette.primary.main,
    fontWeight: 600,
    flex: 1,
    marginLeft: 2,
  },
});
