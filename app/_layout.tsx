import { ThemeProvider } from "@/theme/ThemeContext";
import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tabs.Screen name="index" options={{ title: "Home" }} />
          <Tabs.Screen name="tasks" options={{ title: "Tasks" }} />
          <Tabs.Screen name="diary" options={{ title: "Diary" }} />
        </Tabs>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
