import { Icon } from "@rneui/base";
import React from "react";
import { Dimensions, Pressable } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { FoodData } from "../global/Data";
import { colors } from "../global/Styles";

const FoodCard = ({
  farAway,
  name,
  businessAddress,
  imageUrl,
  avarageReview,
  numberOfReview,
  screenWidth,
  foodType,
  delivery,
}) => {
  return (
    <TouchableOpacity>
      <View style={{ ...styles.cardView, width: screenWidth }}>
        <Image
          source={imageUrl}
          style={{ ...styles.image, width: screenWidth }}
        />
        <View style={styles.flex}>
          <View>
            <Text style={styles.nameText}>{name}</Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                backgroundColor: colors.orangeAccent,
                padding: 5,
                borderRadius: 5,
                color: colors.whiteAccent,
              }}
            >
              {foodType}
            </Text>
          </View>
        </View>
        <View style={styles.flex}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 9,
            }}
          >
            <Icon
              type="material-community"
              name="map-marker"
              color={colors.orangeAccent}
            />
            <Text
              style={{
                fontSize: 15,
                backgroundColor: colors.blueAccent,
                padding: 3,

                borderRadius: 5,
                color: colors.whiteAccent,
              }}
            >
              {delivery} min
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 9,
            }}
          >
            <Text style={{ fontSize: 18, color: colors.greyAccent300 }}>
              {businessAddress}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.whiteAccent,
            position: "absolute",
            right: 2,
            top: 4,
            padding: 3,
            borderRadius: 5,
          }}
        >
          <Icon
            type="material-community"
            name="star"
            color={colors.orangeAccent}
          />
          <Text>{avarageReview}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderWidth: 1,
    borderColor: colors.greyAccent,
    borderRadius: 5,
  },
  image: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 170,
  },
  nameText: {
    marginHorizontal: 9,
    fontSize: 20,
    fontWeight: "bold",
  },
  flex: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
    justifyContent: "space-between",
    paddingRight: 10,
  },
});
