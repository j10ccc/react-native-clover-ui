import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Button, Card, Demo } from "../components";
import MetaInfo from "../components/MetaInfo";
import { useState } from "react";

const DemoCard = () => {
  const [count, setCount] = useState(0);
  const handlePress = () => {
    setCount(count + 1);
  };
  return (
    <Demo>
      <Card title="Button">
        <Button onPress={() => handlePress()}>count {count}</Button>
      </Card>
    </Demo>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Demo>
          <MetaInfo />
        </Demo>
        <DemoCard />
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
