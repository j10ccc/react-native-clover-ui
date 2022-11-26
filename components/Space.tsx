import { Children, ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type SpacePropsType = {
  children: ReactNode;
  align?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";
  direction?: "column" | "row" | "row-reverse" | "column-reverse";
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
};

const Space = (props: SpacePropsType) => {
  const {
    children,
    direction = "row",
    justify = "flex-start",
    align = "flex-start",
  } = props;

  const dynamicStyle = StyleSheet.create({
    container: {
      flexDirection: direction,
      justifyContent: justify,
      alignContent: align,
    },
  });

  return (
    <View style={[style.container, dynamicStyle.container]}>
      {Children.map<ReactNode, ReactNode>(children, (child) => {
        return <View style={style.spaceItem}>{child}</View>;
      })}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexWrap: "wrap",
  },
  spaceItem: {
    paddingBottom: 8,
    marginRight: 8,
  },
});

export default Space;
