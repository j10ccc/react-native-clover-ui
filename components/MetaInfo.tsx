import Card from "./Card";
import { Platform, Text, useWindowDimensions } from "react-native";
import Tag from "./Tag";

const MetaInfo = () => {
  const { OS, Version } = Platform;
  const { height, width } = useWindowDimensions();
  return (
    <Card title="Device Meta" extra={<Tag label="dev" color="blue"/>}>
      <Text>OS version: {OS}@{Version} </Text>
      <Text>Display height: {height}</Text>
      <Text>Display width: {width}</Text>
    </Card>
  );
};

export default MetaInfo;
