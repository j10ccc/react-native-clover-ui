import HomeScreen from "./pages/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashBoard from "./pages/DashBoard";
import {PortalProvider, Portal} from "./components"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PortalProvider>
      <Portal />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" component={HomeScreen} />
          <Stack.Screen name="DashBoard" component={DashBoard} />
        </Stack.Navigator>
      </NavigationContainer>
    </PortalProvider>
  );
}
