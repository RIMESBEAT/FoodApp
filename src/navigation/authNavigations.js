import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import LogInScreen from "../screens/authScreens/LogInScreen";
import ForgetPassword from "../screens/authScreens/ForgetPassword";
import ClientTab from "./ClientTabs";
import RestaurantMapScreen from "../screens/RestaurantScreen/RestaurantScreen";
import DrawerNavigation from "./DrawerNavigation";

const AuthStack = createStackNavigator();
const AuthNavigations = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignInWelcomScreen"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStack.Screen
        name="LogInScreen"
        component={LogInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <AuthStack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStack.Screen
        name="RestaurantScreen"
        component={RestaurantMapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigations;
