import { StatusBar, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import { colors, parameters } from "./src/global/Styles";
import LogInScreen from "./src/screens/authScreens/LogInScreen";
import SignInScreen from "./src/screens/authScreens/SignInScreen";
import SignInWelcomeScreen from "./src/screens/authScreens/SignInWelcomeScreen";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      {/* <SignInScreen /> */}
      {/* <LogInScreen /> */}
      <SignInWelcomeScreen />
    </View>
  );
}
