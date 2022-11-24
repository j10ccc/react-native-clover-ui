import Card from "./Card";
import { Platform, Text, useWindowDimensions } from "react-native";

const MetaInfo = () => {
  const { OS, Version } = Platform;
  const { height, width } = useWindowDimensions();
  return (
    <Card title="Device Meta">
      <Text>OS version: {OS}@{Version} </Text>
      <Text>Display height: {height}</Text>
      <Text>Display width: {width}</Text>
    </Card>
  );
};

export default MetaInfo;
