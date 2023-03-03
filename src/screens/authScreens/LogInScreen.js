import React, { useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  ImageBackground,
} from "react-native";
import BgImage from "../../../assets/homeBg.png";
import { colors, parameters } from "../../global/Styles";
import * as Animatable from "react-native-animatable";
import { Button, color, Icon } from "@rneui/base";
import Header from "../../components/Header";

const LogInScreen = () => {
  const [inputText, setInputText] = useState(false);
  const [inputText02, setInputText02] = useState(false);

  const inputText1 = useRef(1);
  const inputText2 = useRef(2);

  return (
    <View>
      <ImageBackground
        source={BgImage}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <View style={styles.overlay}>
          <View>
            <Header title="My Account" arrowType="arrow-left" />
          </View>
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <Text style={styles.homeText}>YOU YOU</Text>
            <Text style={styles.smHomeText}>International</Text>
          </View>
          <View style={styles.content}>
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

            <View style={styles.input2}>
              <Animatable.View
                animation={inputText ? "" : "fadeInRight"}
                duration={300}
              >
                <Icon
                  type="material-community"
                  name="lock"
                  color={colors.whiteAccent}
                  size={20}
                />
              </Animatable.View>

              <TextInput
                placeholder="Password"
                style={{ width: "85%", color: colors.whiteAccent }}
                ref={inputText2}
                onFocus={() => {
                  setInputText(false);
                }}
                onBlur={() => {
                  setInputText(true);
                }}
                placeholderTextColor={colors.whiteAccent}
              />
              <Animatable.View
                style={styles.iconEye}
                animation={inputText ? "" : "fadeInLeft"}
                duration={400}
              >
                <Icon
                  type="material-community"
                  name="eye-off"
                  color={colors.whiteAccent}
                  size={20}
                />
              </Animatable.View>
            </View>
            <View
              style={{
                alignItems: "flex-end",
                paddingRight: 20,
              }}
            >
              <Text style={styles.forgetPass}>Forgot Password?</Text>
            </View>
            <View style={styles.btn}>
              <Button
                title="Login"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                paddingRight: 20,
              }}
            >
              <Text style={styles.createAct}>Create New Account</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LogInScreen;

const styles = {
  bgImage: {
    height: "100%",
    width: "100%",
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: "100%",
    height: "100%",
  },
  homeText: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.whiteAccent,
  },
  smHomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.whiteAccent,
  },
  input2: {
    borderColor: colors.transparentAccent,
    backgroundColor: colors.transparentAccent,
    marginHorizontal: 20,
    marginBottom: 12,
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
  forgetPass: {
    fontSize: 17,
    color: colors.whiteAccent,
    marginTop: 40,
  },
  createAct: {
    fontSize: 17,
    color: colors.whiteAccent,
    marginTop: 40,
    textDecorationLine: "underline",
  },
  btn: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  content: {
    marginTop: "40%",
  },
};
