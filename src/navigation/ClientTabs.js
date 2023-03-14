import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import React from "react";
import { colors } from "../global/Styles";
import HomeScreen from "../screens/homeScreens/HomeScreen";
import OrderScreen from "../screens/OrderScreen/OrderScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import UserScreen from "../screens/UserScreen/UserScreen";

const ClientTab = () => {
  const ClientTabs = createBottomTabNavigator();
  return (
    <ClientTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.orangeAccent,
        headerShown: false,
      }}
    >
      <ClientTabs.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <ClientTabs.Screen
        component={SearchScreen}
        name="SearchScreen"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="magnify"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <ClientTabs.Screen
        component={OrderScreen}
        name="OrderScreen"
        options={{
          tabBarLabel: "Order",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="view-list"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <ClientTabs.Screen
        component={UserScreen}
        name="UserScreen"
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="account"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
};

export default ClientTab;
