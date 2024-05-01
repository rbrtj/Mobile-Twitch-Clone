import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StyledButton from "./StyledButton";

const items = [
  "Games",
  "Music",
  "Sport",
  "Travel",
  "Talks",
  "Food & drinks",
  "Special events",
];

type AuthScreenProps = {
  onLogin: () => void;
  onRegister: () => void;
};

const AuthScreen = ({ onLogin, onRegister }: AuthScreenProps) => {
  return (
    <View style={style.container}>
      <SafeAreaView>
        <View style={style.content}>
          {items.map((item) => (
            <Text key={item} style={style.item}>
              {item}
            </Text>
          ))}
        </View>
        <View style={style.actions}>
          <StyledButton
            text={"Sign in"}
            onPress={onLogin}
            size="medium"
            isOpaque={false}
          />
          <StyledButton text={"Register"} onPress={onRegister} size="medium" />
        </View>
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    backgroundColor: "#6441a5",
    width: "100%",
    height: "100%",
    paddingTop: 112,
  },
  content: {
    display: "flex",
    gap: 32,
    paddingLeft: 32,
    marginBottom: 48,
  },
  item: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
  },
});

export default AuthScreen;
