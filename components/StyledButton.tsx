import { View, Text, Button } from "react-native";
import React from "react";

type StyledButtonProps = {
  text: string;
  onPress: () => void;
  size: "small" | "medium" | "large";
  isOpaque?: boolean;
};

// TODO: Move to a 'Pressable' component, adjust isOpaque prop

const StyledButton = ({
  text,
  onPress,
  size = "medium",
  isOpaque = true,
}: StyledButtonProps) => {
  return (
    <View
      style={{
        width: size === "small" ? 100 : size === "medium" ? 150 : 200,
        height: 50,
        backgroundColor: "white",
        borderRadius: 8,
        alignContent: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
        opacity: isOpaque ? 1 : 0.2,
      }}
    >
      <View>
        <Button
          title={text}
          color={isOpaque ? "black" : "black"}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default StyledButton;
