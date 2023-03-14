import { Icon } from "@rneui/base";
import React, { useRef, useState } from "react";
import { Modal } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

const SearchComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isFocussed, setIsfocussed] = useState(true);
  const inputTextRef = useRef();
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.inputStyle}>
          <Icon
            type="material"
            name="search"
            iconStyle={{ marginRight: 5 }}
            size={35}
          />
          <Text style={{ fontSize: 18 }}>What are you looking for?</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View>
          <View>
            
          </View>
        </View>
      </Modal>
      <Text>Search Component</Text>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  inputStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
  },
});
