import { StyleSheet, View } from "react-native";
import AppointmentList from "../components/appointments/appointments-list/AppointmentsList";
import ColorPalette from "../constants/ColorPalette";
import { useLayoutEffect } from "react";

export default function AppointmentsListScreen({ navigation }) {
  // useLayoutEffect(function () {});
  return (
    <View style={styles.screen}>
      <AppointmentList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: ColorPalette.background.page,
  },
});
