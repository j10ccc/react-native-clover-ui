import {
  Space,
  Button,
  Demo,
  useModal,
} from "../components";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const DashBoard = ({ navigation }: any) => {
  const goBack = () => {
    navigation.goBack();
  };

  const { Alert } = useModal();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
          <Demo title="Navigate">
            <Space>
              <Button onPress={goBack}>goBack</Button>
              <Button
                onPress={() => {
                  Alert({ content: "DashBoard" });
                }}
              >
                openModal
              </Button>
            </Space>
          </Demo>
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

export default DashBoard;
