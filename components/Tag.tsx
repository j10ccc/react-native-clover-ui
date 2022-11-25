import { View, Text, StyleSheet } from "react-native";
import { theme } from "../constants/styles";

type TagPropsType = {
  color?: "green" | "blue" | "black" | "orange";
  label: string;
};

const Tag = (props: TagPropsType) => {
  const { label, color = "green" } = props;

  const dynamicStyle = StyleSheet.create({
    container: {
      backgroundColor:
        theme.defaultTheme[`__TAG_BACKGROUND_${color.toUpperCase()}`],
    },
    tagLabel: {
      color: theme.defaultTheme[`__TAG_TEXT_${color.toUpperCase()}`],
    },
  });

  return (
    <View style={[style.container, dynamicStyle.container]}>
      <Text style={[style.tagLabel, dynamicStyle.tagLabel]}>{label}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  tagLabel: {},
});

export default Tag;
