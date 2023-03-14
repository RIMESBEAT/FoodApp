import { Icon, withBadge } from "@rneui/base";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors, parameters } from "../global/Styles";

const HomeHeader = ({ type, navigation }) => {
  const BadgeIcon = withBadge(12)(Icon);
  return (
    <View style={styles.header}>
      <View style={styles.icon1}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.whiteAccent}
          size={30}
          onPress={() => {
            navigation.toggleDrawer()
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>YOU YOU's Kitchen</Text>
      </View>
      <View style={styles.icon2}>
        <BadgeIcon
          type="material-community"
          name="cart"
          color={colors.whiteAccent}
          size={30}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: parameters.headerHeight,
    backgroundColor: colors.orangeAccent,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: colors.whiteAccent,
    fontWeight: "bold",
  },
  icon1: {
    marginLeft: 20,
  },
  icon2: {
    marginRight: 20,
  },
});
