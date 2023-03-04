import { Icon } from "@rneui/themed";
import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { colors, parameters } from "../global/Styles";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    // backgroundColor: colors.orangeAccent,
    height: parameters.headerHeight,
    padding: 10,
    alignItems: "center"
  },
  headerText: {
    color: colors.whiteAccent,
    fontSize: 20,
  },
});

export default function Header({ title, arrowType, navigation }) {
  return (
    <View style={styles.header}>
      <View>
        <Icon
          type="material-community"
          name={arrowType}
          color={colors.whiteAccent}
          size={20}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={{ marginLeft: 8 }}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}
