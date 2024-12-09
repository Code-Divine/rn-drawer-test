import { FlatList, StyleSheet } from "react-native";
import AppointmentItem from "./parts/AppointmentItem";
import { useNavigation } from "@react-navigation/native";

const sampleData = [
  { id: 1, start_on: "sdasd" },
  { id: 2, start_on: "sdasd" },
  { id: 3, start_on: "sdasd" },
  { id: 4, start_on: "sdasd" },
  { id: 5, start_on: "sdasd" },
  { id: 6, start_on: "sdasd" },
  { id: 7, start_on: "sdasd" },
  { id: 8, start_on: "sdasd" },
  { id: 9, start_on: "sdasd" },
  { id: 10, start_on: "sdasd" },
  { id: 11, start_on: "sdasd" },
  { id: 12, start_on: "sdasd" },
];

export default function AppointmentList() {
  // Context
  const { navigate } = useNavigation();

  // Handlers
  function renderAppointmentItem(itemData) {
    const appointmentSelectedHandler = () => {
      navigate("Appointment", { id: itemData.item.id });
    };

    return (
      <AppointmentItem
        {...itemData.item}
        onPress={appointmentSelectedHandler}
      />
    );
  }

  return (
    <FlatList
      contentContainerStyle={{ gap: 16, padding: 16 }}
      data={sampleData}
      keyExtractor={(item) => item.id}
      renderItem={renderAppointmentItem}
    />
  );
}
