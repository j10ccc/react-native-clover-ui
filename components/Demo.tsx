import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

type DemoPropsType = {
  children: ReactNode;
};

const Demo = (props: DemoPropsType) => {
  const { children } = props;
  return <View style={style.container}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});

export default Demo;
