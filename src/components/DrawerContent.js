import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Avatar, Icon } from "@rneui/base";
import UseImg from "../../assets/user.jpg";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  ImageBackground,
  Switch,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { colors, parameters } from "../global/Styles";
const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            padding: 15,
            backgroundColor: colors.orangeAccent,
            marginTop: 0,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Avatar
                source={UseImg}
                rounded
                size={70}
                avatarStyle={parameters.avatarStyle}
              />
            </View>

            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginLeft: 5,
                  color: colors.whiteAccent,
                }}
              >
                Rimes Beat
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="middle"
                style={styles.smText}
              >
                rimes@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text style={styles.smText}>1</Text>
              <Text style={styles.smText}>My Favorite</Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text style={styles.smText}>10</Text>
              <Text style={styles.smText}>Shopping Cart</Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Driver Console"
          icon={({ size, color }) => (
            <Icon
              type="MaterialIcons"
              name="delivery-dining"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Payment"
          icon={({ size, color }) => (
            <Icon
              type="MaterialIcons"
              name="payment"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Promotions"
          icon={({ size, color }) => (
            <Icon
              type="Material-Community"
              name="tag"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Settings"
          icon={({ size, color }) => (
            <Icon
              type="Material-Community"
              name="settings"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Help"
          icon={({ size, color }) => (
            <Icon
              type="Material-Community"
              name="help"
              color={color}
              size={size}
            />
          )}
        />

        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            borderTopColor: colors.greyAccent200,
            borderTopWidth: 2,
          }}
        >
          <Text style={{ fontSize: 15, color: colors.greyAccent300 }}>
            Preferences
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Dark Theme</Text>
            <Switch
              trackColor={{
                true: colors.orangeAccent,
                false: colors.greyAccent,
              }}
              thumbColor={colors.greenAccent}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label="Sign Out"
        icon={({ size, color }) => (
          <Icon
            type="Material-Community"
            name="logout"
            color={color}
            size={size}
          />
        )}
      />
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  headerProfile: {},

  smText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 5,
    color: colors.whiteAccent,
  },
});
