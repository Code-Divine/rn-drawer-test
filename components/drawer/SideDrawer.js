import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text, Pressable } from "react-native";

export default function SideDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text>д-р. Тест Некој</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem {...props} label="Излез" />
    </DrawerContentScrollView>
  );
}
