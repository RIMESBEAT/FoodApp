import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "@rneui/base";
import React from "react";
import DrawerContent from "../components/DrawerContent";
import { colors } from "../global/Styles";
import BusinessConsoleScreen from "../screens/DrawerItems/BusinessConsoleScreen";
import DriverConsoleScreen from "../screens/DrawerItems/DriverConsoleScreen";
import HelpScreen from "../screens/DrawerItems/HelpScreen";
import PayementScreen from "../screens/DrawerItems/PayementScreen";
import PromotionsScreen from "../screens/DrawerItems/PromotionsScreen";
import SettingScreen from "../screens/DrawerItems/SettingScreen";
import HomeScreen from "../screens/homeScreens/HomeScreen";

import ClientTab from "./ClientTabs";
const DrawerNavigation = (props) => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="ClientTab"
        component={ClientTab}
        options={{
          title: "Home",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? "#7cc" : colors.greyAccent}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="BusinessConsole"
        component={BusinessConsoleScreen}
        options={{
          title: "Business Console",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material"
              name="business"
              color={focussed ? "#7cc" : colors.greyAccent}
              size={size}
            />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="DriverConsole"
        component={DriverConsoleScreen}
        options={{
          title: "Driver Console",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="MaterialIcons"
              name="delivery-dining"
              color={focussed ? "#7cc" : colors.greyAccent}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="PaymentScreen"
        component={PayementScreen}
        options={{
          title: "Payment",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="MaterialIcons"
              name="payment"
              color={focussed ? "#7cc" : colors.greyAccent}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="PromotionsScreen"
        component={PromotionsScreen}
        options={{
          title: "Promotions",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="Material-Community"
              name="tag"
              color={focussed ? "#7cc" : colors.greyAccent}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          title: "Settings",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="Material-Community"
              name="settings"
              color={focussed ? "#7cc" : colors.greyAccent}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          title: "Help",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="Material-Community"
              name="help"
              color={focussed ? "#7cc" : colors.greyAccent}
              size={size}
            />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
