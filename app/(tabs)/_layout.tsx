// React
import { useColorScheme } from "react-native";
// Expo
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

// Constants
import Colors from "../../constants/Colors";
import { Header } from "../../components/Header";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Coins",
          header: ({ options: { title } }) => <Header title={title} />,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="attach-money" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          header: ({ options: { title } }) => <Header title={title} />,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="star" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
