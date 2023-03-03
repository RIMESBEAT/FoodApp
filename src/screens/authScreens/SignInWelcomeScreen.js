import React from "react";
import { Button, Image, ImageBackground, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";

import Food1 from "../../../assets/afriFood1.jpg";
import Food2 from "../../../assets/afriFood2.jpg";
import Food3 from "../../../assets/afriFood3.jpg";
import { colors } from "../../global/Styles";
import FoodBg from "../../../assets/homeBg.png";

const SignInWelcomeScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <ImageBackground source={FoodBg} style={styles.image}>
          <Swiper
            cards={[Food1, Food2, Food3]}
            renderCard={(card) => {
              return (
                <View style={styles.card}>
                  <Image source={card} style={styles.image} />
                </View>
              );
            }}
            onSwiped={(cardIndex) => {
              console.log(cardIndex);
            }}
            onSwipedAll={() => {
              console.log("onSwipedAll");
            }}
            cardIndex={0}
            backgroundColor={"#4FD0E9"}
            stackSize={3}
            infinite={true}
          >
            <Button
              onPress={() => {
                console.log("oulala");
              }}
              title="Press me"
              style={{ backgroundColor: colors.blackAccent }}
            >
              You can press me
            </Button>
          </Swiper>
        </ImageBackground>
      </View>
    </View>
  );
};

export default SignInWelcomeScreen;

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  card: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
};
