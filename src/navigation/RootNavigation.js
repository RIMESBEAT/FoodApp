import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigations from "./authNavigations";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigations />
    </NavigationContainer>
  );
};

export default RootNavigation;
