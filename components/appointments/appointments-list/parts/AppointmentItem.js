import { Pressable, StyleSheet, Text, View } from "react-native";
import Time from "../../../ui/Time";
import PatientName from "../../../ui/PatientName";

export default function AppointmentItem({ id, onPress }) {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <View style={styles.inner}>
        <View style={styles.apptHeader}>
          <PatientName name={"Ненад Јовановски"} customId={"123"} />
          <Time time={"18:00"} />
        </View>
        <View style={styles.apptDataWrap}>
          <Text style={styles.label}>Лекар:</Text>
          <Text style={styles.test}>д-р. Тест Тестинг</Text>
        </View>
        <View style={styles.apptDataWrap}>
          <Text style={styles.label}>Услуга:</Text>
          <Text style={styles.test}>Тест услуга</Text>
        </View>
        <View style={styles.apptDataWrap}>
          <Text style={styles.label}>Бр. Преглед:</Text>
          <Text style={styles.test}>123234</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    borderRadius: 4,
    elevation: 3,
  },
  apptHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  inner: {
    padding: 8,
  },
  apptDataWrap: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  label: {
    width: 90,
    fontWeight: 600,
  },
  text: {
    flex: 1,
  },
});
