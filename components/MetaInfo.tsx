import { Platform, Text, useWindowDimensions } from "react-native";
import Tag from "./Tag";
import { Demo } from "../components";

const MetaInfo = () => {
  const { OS, Version } = Platform;
  const { height, width } = useWindowDimensions();
  return (
    <Demo title="Device Meta" extra={<Tag label="dev" color="blue" />}>
      <Text>
        OS version: {OS}@{Version}
      </Text>
      <Text>Display height: {height}</Text>
      <Text>Display width: {width}</Text>
    </Demo>
  );
};

export default MetaInfo;
