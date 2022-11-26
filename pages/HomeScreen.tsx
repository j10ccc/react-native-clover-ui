import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Button, Demo, Space } from "../components";
import MetaInfo from "../components/MetaInfo";
import { useState } from "react";

const DemoButton = () => {
  const [count, setCount] = useState(0);
  const handlePress = () => {
    setCount(count + 1);
  };
  return (
    <Demo title="Button">
      <Button onPress={() => handlePress()}>count {count}</Button>
    </Demo>
  );
};

const DemoNav = ({ navigation }: any) => {
  const handlePressNavigate = () => {
    navigation.navigate("DashBoard");
  };
  const handlePressPush = () => {
    navigation.push("DashBoard");
  };
  return (
    <Demo title="Navigate">
      <Space>
      <Button onPress={handlePressNavigate}>NavToDashBoard</Button>
      <Button>hel</Button>
      <Button>hel</Button>
      <Button>hel</Button>
      <Button>hel</Button>
      <Button>hel</Button>
      <Button onPress={handlePressPush}>PushToDashBoard</Button>
      </Space>
    </Demo>
  );
};

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <MetaInfo />
        <DemoButton />
        <DemoNav navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

export default HomeScreen;
