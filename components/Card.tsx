import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

type CardPropsType = {
  title?: string | ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
};

const Card = (props: CardPropsType) => {
  const { title, children } = props;
  return (
    <View style={style.container}>
      <View style={style.cardHeader}>
        <Text style={style.cardTitle}>{title}</Text>
      </View>
      <View style={style.cardBody}>{children}</View>
      <View style={style.cardFooter}></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
  },
  cardHeader: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  cardTitle: {
    fontSize: 24,
  },
  cardBody: {
    borderTopColor: "black",
  },
  cardFooter: {
    paddingBottom: 16,
  },
});

export default Card;
