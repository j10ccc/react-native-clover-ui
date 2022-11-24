import { ReactNode } from "react";
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";

type ButtonPropsType = {
  children: ReactNode;
  onPress?: () => void;
  type?: "primary" | "week" | "waring" | "disable";
};

const Button = (props: ButtonPropsType) => {
  const { children, onPress } = props;

  return (
    <TouchableHighlight onPress={() => onPress?.()} style={style.container}>
      <View style={style.button}>
        <Text style={style.buttonLabel}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginHorizontal: "1%",
    marginButtom: 6,
    alignSelf: "flex-start",
  },

  button: {
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignSelf: "flex-start",
    backgroundColor: "#f2f2f2",
  },
  buttonLabel: {
    fontSize: 17,
    color: "#07c160",
    fontWeight: "500",
  },
});

export default Button;
