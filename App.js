import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppointmentsListScreen from "./screens/AppointmentsList";
import AppointmentScreen from "./screens/Appointment";
import SettingsScreen from "./screens/Settings";
import Icon from "@expo/vector-icons/MaterialIcons";
import ColorPalette from "./constants/ColorPalette";
import RemindersScreen from "./screens/Reminders";
import FinancialsScreen from "./screens/Financials";
import SideDrawer from "./components/drawer/SideDrawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SideDrawer {...props} />}
      useLegacyImplementation={true}
      screenOptions={{
        headerTitleAlign: "center",
        drawerActiveTintColor: ColorPalette.primary.main,
        drawerContentContainerStyle: { backgroundColor: "#f1f6fb", flex: 1 },
        drawerItemStyle: {
          borderRadius: 4,
          width: "100%",
        },
        drawerIcon: {
          size: 24,
        },
      }}
    >
      <Drawer.Screen
        name="AppointmentsList"
        component={AppointmentsListScreen}
        options={{
          title: "Прегледи",
          drawerIcon: ({ color, size, focused }) => (
            <Icon
              name="calendar-view-day"
              color={
                focused ? ColorPalette.primary.main : ColorPalette.grey[700]
              }
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Reminders"
        component={RemindersScreen}
        options={{
          title: "Потсетник",
          drawerIcon: ({ color, size, focused }) => (
            <Icon
              name="checklist"
              color={
                focused ? ColorPalette.primary.main : ColorPalette.grey[700]
              }
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Financials"
        component={FinancialsScreen}
        options={{
          title: "Финансии",
          drawerIcon: ({ color, size, focused }) => (
            <Icon
              name="payments"
              color={
                focused ? ColorPalette.primary.main : ColorPalette.grey[700]
              }
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Подесувања",
          drawerIcon: ({ color, size, focused }) => (
            <Icon
              name="settings"
              color={
                focused ? ColorPalette.primary.main : ColorPalette.grey[700]
              }
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Appointment"
          options={{
            headerTitle: "Преглед",
          }}
          component={AppointmentScreen}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
