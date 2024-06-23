import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class ImageScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //     return {
  //       headerTitle: "Gallery",
  //       headerLeft: () => (
  //         <Ionicons
  //           onPress={() => navigation.goBack()}
  //           name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
  //           style={{ paddingLeft: 10 }}
  //           size={32}
  //           color="white"
  //         />
  //       ),
  //       headerStyle: {
  //         backgroundColor: "#368C16"
  //       },
  //       headerTintColor: "#fff",
  //       headerTitleStyle: {
  //         fontWeight: "bold"
  //       }
  //     };
  //   };

  static navigationOptions = {
    header: null
  };

  render() {
    const imageUri = this.props.navigation.getParam("ImageUri", "Peter");
    return (
      <ImageBackground source={{ uri: imageUri }} style={{ flex: 1 }}>
        <View style={{ flex: 0.1, paddingTop: 25, paddingLeft: 10 }}>
          <Ionicons
            name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
            color="white"
            size={26}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 0.9
          }}
        >
          <Text style={{ color: "red", fontSize: 18 }}> You did it </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({});
