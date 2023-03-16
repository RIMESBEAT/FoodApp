import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import React, { useRef, useState } from "react";
import { FlatList, Modal } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { filterData } from "../global/Data";
import { colors } from "../global/Styles";
import  {filter } from "lodash";

const SearchComponent = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([...filterData]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isTextFoccused, setIsTextFocussed] = useState(true);
  const inputTextRef = useRef(0);

  const contains = ({ name }, query) => {
    if (name.toLowerCase().includes(query.toLowerCase())) {
      return true;
    }
    return false;
  };

  const handleSearch = text => {
    const searchData = filter(filterData, userSearchInput => {
    return contains(userSearchInput, text);
    })
    setData([...searchData])
}

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
          <View style={styles.inputStyle}>
            <View style={{ flexDirection: "row" }}>
              <Animatable.View
                animation={isTextFoccused ? "fadeInLeft" : "fadeInRight"}
                duration={400}
              >
                <Icon
                  type="meterial"
                  name={isTextFoccused ? "arrow-back" : "search"}
                  size={35}
                  onPress={() => {
                    if (isTextFoccused) {
                      setIsTextFocussed(false);
                      setModalVisible(false);
                    }
                  }}
                />
              </Animatable.View>

              <TextInput
                placeholder="Search Here"
                style={{ fontSize: 16, width: "80%" }}
                ref={inputTextRef}
                autoFocus={false}
                onBlur={() => {
                  setIsTextFocussed(false);
                }}
                onFocus={() => {
                  setIsTextFocussed(true);
                }}
                onChangeText={handleSearch}
              />
            </View>

            <Animatable.View
              animation={isTextFoccused ? "fadeInRight" : ""}
              duration={400}
            >
              <Icon
                type="material"
                name={isTextFoccused ? "cancel" : null}
                size={30}
                onPress={() => {
                  inputTextRef.current.clear();
                }}
              />
            </Animatable.View>
          </View>
          <View style={{ width: "100%", height: "100%" }}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    Keyboard.dismiss;
                    navigation.navigate("RestaurantScreen", {
                      item: item.name,
                    });
                    setModalVisible(false);
                    setIsTextFocussed(true);
                  }}
                >
                  <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <Text style={{ fontSize: 15, color: colors.greyAccent }}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
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
