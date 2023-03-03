import React, { useRef, useState } from "react";
import { Icon } from "@rneui/themed";
import { Text, View, StyleSheet, Dimensions, TextInput } from "react-native";
import { colors, parameters, titleText } from "../../global/Styles";
import Header from "../../components/Header";
import * as Aninatable from "react-native-animatable";
import { Button } from "@rneui/base";

const SignInScreen = () => {
  const [inputText, setInputText] = useState(false);

  const inputText1 = useRef(1);
  const inputText2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="My Account" arrowType="arrow-left" />

      <View>
        <Text style={styles.title}>Sign-In</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.textBody}>
          Please Enter Your Email And Password
        </Text>
        <Text style={styles.textBody}>Or Registered With Your Account</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput placeholder="Email" style={styles.input} />
        </View>
        <View style={styles.input2}>
          <Aninatable.View
            animation={inputText ? "" : "fadeInRight"}
            duration={400}
          >
            <Icon
              type="material-community"
              name="lock"
              color={colors.greyAccent}
              size={20}
            />
          </Aninatable.View>
          <TextInput
            placeholder="Password"
            style={{ width: "85%" }}
            ref={inputText1}
            onFocus={() => {
              setInputText(false);
            }}
            onBlur={() => {
              setInputText(true);
            }}
          />
          <Aninatable.View
            style={styles.iconEye}
            animation={inputText ? "" : "fadeInLeft"}
            duration={400}
          >
            <Icon
              type="material-community"
              name="eye-off"
              color={colors.greyAccent}
              size={20}
            />
          </Aninatable.View>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Button
            title="LOG-IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
          />
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ ...styles.textBody, textDecorationLine: "underline" }}>
          Forgot Password?
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: titleText.title,
    color: colors.orangeAccent,
  },
  textBody: {
    fontSize: 14,
    color: colors.greyAccent,
  },
  input: {
    borderColor: colors.greyAccent,
    marginHorizontal: 20,
    marginBottom: 12,
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 12,
    paddingTop: 10,
    paddingBottom: 10,
  },
  input2: {
    borderColor: colors.greyAccent,
    marginHorizontal: 20,
    marginBottom: 12,
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 12,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
  },
});
