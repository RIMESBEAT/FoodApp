import { StatusBar, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import { colors, parameters } from "./src/global/Styles";
import RootNavigation from "./src/navigation/RootNavigation";
import LogInScreen from "./src/screens/authScreens/LogInScreen";
import SignInScreen from "./src/screens/authScreens/SignInScreen";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <RootNavigation />
    </View>
  );
}
