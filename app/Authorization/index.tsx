import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import AuthScreen from "../../components/AuthScreen";

const Authorization = () => {
  return (
    <View style={style.container}>
      <AuthScreen
        onLogin={() => console.log("login")}
        onRegister={() => console.log("Register")}
      />
      <Text></Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

export default Authorization;
