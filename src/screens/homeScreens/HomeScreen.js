import { Icon } from "@rneui/base";
import React, { useState } from "react";
import { Dimensions, FlatList, StyleSheet, TextInput } from "react-native";
import { Text, View, ScrollView } from "react-native";
import HomeHeader from "../../components/HomeHeader";
import { colors } from "../../global/Styles";
import Food1 from "../../../assets/afriFood1.jpg";
import Food2 from "../../../assets/afriFood2.jpg";
import Food3 from "../../../assets/afriFood3.jpg";
import { Image } from "react-native";
import Swiper from "react-native-swiper";
import { Button } from "@rneui/themed";
import { Pressable } from "react-native";
import { filterData, FoodData } from "../../global/Data";
import FoodCard from "../../components/FoodCard";
import CountDown from "react-native-countdown-component";
import { TouchableOpacity } from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const [checkIndex, setCheckIndex] = useState("0");
  const [delivery, setDelivery] = useState(true);
  return (
    <View style={{ height: "100%" }}>
      <HomeHeader navigation={navigation} />
      <ScrollView stickyHeaderIndices={[0]} scrollIndicatorInsets={true}>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              backgroundColor: colors.whiteAccent,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}
            >
              <View
                style={{
                  ...styles.deliveryBtn,
                  backgroundColor: delivery
                    ? colors.orangeAccent
                    : colors.greyAccent200,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: delivery ? colors.whiteAccent : "black",
                  }}
                >
                  Delivery
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate("RestaurantScreen");
              }}
            >
              <View
                style={{
                  ...styles.deliveryBtn,
                  backgroundColor: !delivery
                    ? colors.orangeAccent
                    : colors.greyAccent100,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: !delivery ? colors.whiteAccent : "black",
                  }}
                >
                  Pick Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: colors.greyAccent200,
            }}
          >
            <Text style={{ fontSize: 20 }}>Available Foods</Text>
            <Text style={{ fontSize: 18, color: colors.greyAccent }}>
              See All (45)
            </Text>
          </View>

          <FlatList
            data={filterData}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item) => item.id}
            extraData={checkIndex}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => setCheckIndex(item.id)}>
                <View
                  style={
                    checkIndex === item.id
                      ? { ...styles.smSelectedCard }
                      : { ...styles.smCard }
                  }
                >
                  <Image
                    source={item.imageUrl}
                    style={{ height: 80, width: 80, borderRadius: 50 }}
                  />
                  <View>
                    <Text
                      style={
                        checkIndex === item.id
                          ? { ...styles.smCardTextSelected }
                          : { ...styles.smCardText }
                      }
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
          <View
            style={{
              flexDirection: "row",

              paddingHorizontal: 10,
              paddingVertical: 5,
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: colors.greyAccent200,
            }}
          >
            <Text style={{ fontSize: 20 }}>Free Delivery</Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 9,
              }}
            >
              <Text>Options Changing in</Text>
              <CountDown
                until={3000}
                size={14}
                timeToShow={["M", "S"]}
                digitStyle={{ backgroundColor: colors.orangeAccent }}
                digitTxtStyle={{ color: colors.whiteAccent }}
                timeLabels={{ m: "MM", s: "SS" }}
              />
            </View>

            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={FoodData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View>
                    <FoodCard
                      screenWidth={SCREEN_WIDTH * 0.8}
                      name={item.name}
                      imageUrl={item.imageUrl}
                      foodType={item.foodType}
                      delivery={item.delivery}
                      businessAddress={item.businessAddress}
                      avarageReview={item.avarageReview}
                    />
                  </View>
                )}
              />
            </View>
            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <View
                style={{
                  flexDirection: "row",

                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  marginTop: 10,
                  marginBottom: 10,
                  backgroundColor: colors.greyAccent200,
                }}
              >
                <Text style={{ fontSize: 20 }}>Available Foods</Text>
              </View>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={FoodData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View>
                    <FoodCard
                      screenWidth={SCREEN_WIDTH * 0.8}
                      name={item.name}
                      imageUrl={item.imageUrl}
                      foodType={item.foodType}
                      delivery={item.delivery}
                      businessAddress={item.businessAddress}
                      avarageReview={item.avarageReview}
                    />
                  </View>
                )}
              />
            </View>
          </View>
          <View></View>
        </View>
      </ScrollView>
      <View>
        {delivery && (
          <TouchableOpacity
            onPress={() => navigation.navigate("RestaurantScreen")}
          >
            <View style={styles.mapFloat}>
              <Icon type="material-community" name="map-marker" color={colors.orangeAccent} size={30} />
              <Text>Maps</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.greyAccent,
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 8,
  },

  image: {
    width: "95%",
    height: "100%",
    marginRight: 0,
  },
  smSelectedCard: {
    marginRight: 2,
    backgroundColor: colors.orangeAccent,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  smCard: {
    marginRight: 2,
    backgroundColor: colors.greyAccent100,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  smCardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  smCardTextSelected: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.whiteAccent,
  },
  mapFloat: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 6,
    right: 6,
    backgroundColor: colors.greyAccent200,
    padding: 10,
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: colors.greyAccent200,
    borderWidth: 1,
  },
  deliveryBtn: {
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,

    borderRadius: 10,
  },
});
