import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import Card from "./Card";

type DemoPropsType = {
  children: ReactNode;
  title: string;
  extra?: ReactNode;
};

const Demo = (props: DemoPropsType) => {
  const { children, title, extra } = props;
  return (
    <View style={style.container}>
      <Card title={title} extra={extra}>
        {children}
      </Card>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});

export default Demo;
