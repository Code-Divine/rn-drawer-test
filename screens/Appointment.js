import { Button, Text, View } from "react-native";
// import { useLayoutEffect } from "react";

export default function AppointmentScreen({ route, navigation }) {
  const { id } = route.params;

  // useLayoutEffect(function () {
  //   navigation.setOptions({
  //     title: `Преглед #${id}`,
  //   });
  // }, []);

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
}
