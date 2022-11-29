import { StyleSheet, SafeAreaView, ScrollView, Button as RNButton } from "react-native";
import { Button, Demo, Space, Portal, useModal } from "../components";
import MetaInfo from "../components/MetaInfo";

const DemoButton = () => {
  return (
    <Demo title="Button">
      <Space>
        <Button color="green">Primary1</Button>
        <Button color="orange">Primary2</Button>
        <Button color="blue">Primary3</Button>
        <Button color="black">Primary4</Button>
      </Space>
      <Space>
        <Button color="green" type="weak">
          Weak1
        </Button>
        <Button color="orange" type="weak">
          Weak2
        </Button>
        <Button color="blue" type="weak">
          Weak3
        </Button>
        <Button color="black" type="weak">
          Weak4
        </Button>
      </Space>
    </Demo>
  );
};

const DemoModal = () => {
  const { Alert } = useModal("HomeScreen");

  return (
    <Demo title="Modal">
      <Button onPress={() => Alert({content: "hello"})}>Open Modal</Button>
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
        <Button onPress={handlePressPush}>PushToDashBoard</Button>
      </Space>
    </Demo>
  );
};

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Portal gateName="HomeScreen">
          <MetaInfo />
          <DemoButton />
          <DemoNav navigation={navigation} />
          <DemoModal />
        </Portal>
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
