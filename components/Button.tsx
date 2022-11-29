import { ReactNode } from "react";
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";
import { theme } from "../constants/styles";

type ButtonPropsType = {
  children: ReactNode;
  onPress?: () => void;
  type?: "primary" | "weak";
  color?: "green" | "orange" | "blue" | "black";
  disable?: boolean // TODO
};

const Button = (props: ButtonPropsType) => {
  const { children, onPress, type = "primary", color="green"} = props;

  const dynamicStyle = StyleSheet.create({
    button: {
      backgroundColor: type === "primary" ? theme.defaultTheme[`__BTN_${color.toUpperCase()}`]: theme.defaultTheme.__BG_1,
    },
    buttonLabel: {
      color: type === "primary" ? theme.defaultTheme.__BTN_TEXT :theme.defaultTheme[`__BTN_TEXT_${color.toUpperCase()}`],
    },
  });

  return (
    <TouchableHighlight onPress={onPress} style={style.container}>
      <View style={[style.button, dynamicStyle.button]}>
        <Text style={[style.buttonLabel, dynamicStyle.buttonLabel]}>
          {children}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginButtom: 6,
    alignSelf: "flex-start",
  },
  button: {
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignSelf: "flex-start",
  },
  buttonLabel: {
    fontSize: 17,
    fontWeight: "500",
  },
});

export default Button;
