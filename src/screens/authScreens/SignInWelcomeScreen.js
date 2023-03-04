import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import * as Animatable from "react-native-animatable";
import Food1 from "../../../assets/afriFood1.jpg";
import Food2 from "../../../assets/afriFood2.jpg";
import Food3 from "../../../assets/afriFood3.jpg";
import { colors, parameters } from "../../global/Styles";
import FoodBg from "../../../assets/homeBg.png";
import { color, Button } from "@rneui/base";

const SignInWelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        source={FoodBg}
        style={{ height: "100%", width: "100%" }}
      >
        <View style={parameters.overlay}>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.subHeading}>Welcome To </Text>
            </Animatable.View>

            <Animatable.View>
              <Text style={styles.heading}>YOU YOU's Kitchen </Text>
            </Animatable.View>
          </View>
          <View style={styles.container}>
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
              backgroundColor={colors.transparent}
              stackSize={3}
              infinite={true}
            ></Swiper>
          </View>
          {/* <View style={styles.btnBox}> */}
            <View style={styles.btn}>
              <Button
                title="Go To Login"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                onPress={() => {
                  navigation.navigate("LogInScreen");
                }}
              />
            </View>
          </View>
        {/* </View> */}
      </ImageBackground>
    </View>
  );
};

export default SignInWelcomeScreen;

const styles = {
  container: {
    flex: 1,
    marginTop: 15,
  },
  card: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    backgroundColor: colors.whiteAccent,
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
  heading: {
    fontSize: 30,
    color: colors.whiteAccent,
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 20,
    color: colors.whiteAccent,
  },
 
  btn: {
    marginHorizontal: 20,
    marginBottom: 60,
  },

  btnBox: {
    marginBottom: 30,
  },
};
