import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

type AppButtonProps = {
  onPress(): void;
  title: string;
  color?: string;
  backgroundColor?: string;
    variant?: string;
};

const AppButton = ({
  onPress,
  title,
  backgroundColor,
  color,
  variant,
}: AppButtonProps) => {
  const backgroundColorBtn = backgroundColor || "#009688";
  const colorBtn = color || "white";
  const variantBtn = variant ==='thick'? 30 : 10

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles?.appButtonContainer,
        backgroundColor: backgroundColorBtn,
          paddingHorizontal: variantBtn
      }}
    >
      <Text style={{ ...styles?.appButtonText, color: colorBtn }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    shadowColor: "black",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default AppButton;
