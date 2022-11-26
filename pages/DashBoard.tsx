import { Button, Demo } from "../components";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const DashBoard = ({ navigation }: any) => {
  const goBack = () => {
      navigation.goBack();
    };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Demo title="Navigate">
          <Button onPress={goBack}>goBack</Button>
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
