import { Children, ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type SpacePropsType = {
  children: ReactNode;
  align?: "start" | "end" | "center" | "baseline";
  direction?: "column" | "row" | "row-reverse" | "column-reverse";
  justify?:
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "stretch";
};

// TODO: direct-column

const Space = (props: SpacePropsType) => {
  const { children, direction = "row" } = props;
  const dynamicStyle = StyleSheet.create({
    container: {
      flexDirection: direction,
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
    flex: 1,
    flexWrap: "wrap",
  },
  spaceItem: {
    paddingBottom: 8,
    marginRight: 8,
  },
});

export default Space;
