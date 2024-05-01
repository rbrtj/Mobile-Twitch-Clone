import { StyleSheet, Text, View } from "react-native";
import UserProfilePicture from "../components/UserProfilePicture";

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <UserProfilePicture />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
