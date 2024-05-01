import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
