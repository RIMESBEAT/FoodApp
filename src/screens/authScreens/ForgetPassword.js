import React, { useRef, useState } from "react";
import { ImageBackground, Text, TextInput, View } from "react-native";
import Header from "../../components/Header";
import FoodBg from "../../../assets/homeBg.png";
import { colors, parameters } from "../../global/Styles";
import * as Animatable from "react-native-animatable";
import { Button, Icon } from "@rneui/base";

const ForPassword = ({ title, type, navigation }) => {
  const [inputText02, setInputText02] = useState(false);
  const inputText1 = useRef(1);

  return (
    <View>
      <ImageBackground source={FoodBg} style={styles.bgImage}>
        <View style={parameters.overlay}></View>
        <View>
          <Header title="Forget Password" arrowType="arrow-left" navigation={navigation} />
          <View style={{}}>
            <Text style={styles.text}>
              Enter your email and we send you instructions on how to reset it
            </Text>
          </View>
          <View style={styles.input2}>
            <Animatable.View
              animation={inputText02 ? "" : "fadeInRight"}
              duration={300}
            >
              <Icon
                type="material-community"
                name="email"
                color={colors.whiteAccent}
                size={20}
              />
            </Animatable.View>

            <TextInput
              placeholder="Email"
              style={{ width: "92%", color: colors.whiteAccent }}
              ref={inputText1}
              onFocus={() => {
                setInputText02(false);
              }}
              onBlur={() => {
                setInputText02(true);
              }}
              placeholderTextColor={colors.whiteAccent}
            />
          </View>
          <View style={styles.btn}>
            <View style={styles.btnAbsolute}>
              <Button
                title="Login"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ForPassword;

const styles = {
  bgImage: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 18,
    color: colors.whiteAccent,
    marginTop: "20%",
    marginHorizontal: 40,
    textAlign: "center",
  },
  input2: {
    borderColor: colors.transparentAccent,
    backgroundColor: colors.transparentAccent,
    marginHorizontal: 20,
    marginTop: 50,
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 12,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
  },
  btn: {
    position: "relative",
    height: "100%",
  },
  btnAbsolute: {
    marginHorizontal: 20,
    marginTop: 40,
    position: "absolute",
    width: "89%",
    top: "18%",
    height: "auto",
  },
};
