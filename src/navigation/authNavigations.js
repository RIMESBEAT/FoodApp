import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import LogInScreen from "../screens/authScreens/LogInScreen";
import ForgetPassword from "../screens/authScreens/ForgetPassword";

const AuthStack = createNativeStackNavigator();
const AuthNavigations = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignInWelcomScreen"
        component={SignInWelcomeScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="LogInScreen"
        component={LogInScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigations;
