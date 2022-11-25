import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../constants/styles";

type CardPropsType = {
  title?: string | ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  extra?: ReactNode;
};

const Card = (props: CardPropsType) => {
  const { title, children, extra } = props;
  return (
    <View style={style.container}>
      <View style={style.cardHeader}>
        <Text style={style.cardTitle}>{title}</Text>
        <View style={style.cardExtra}>{extra}</View>
      </View>
      <View style={style.cardBody}>{children}</View>
      <View style={style.cardFooter}></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: theme.defaultTheme.__BG,
    paddingHorizontal: 8,
  },
  cardHeader: {
    paddingHorizontal: 14,
    paddingVertical: 16,
    flexDirection: "row",
  },
  cardTitle: {
    fontSize: 18,
    flex: 1,
  },
  cardExtra: {},
  cardBody: {},
  cardFooter: {
    paddingBottom: 16,
  },
});

export default Card;
