import React, { Component } from "react";
import { Text, StyleSheet, Image, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class AboutScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "About",
      headerLeft: () => (
        <Ionicons
          onPress={() => navigation.openDrawer()}
          name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
          style={{ paddingLeft: 10 }}
          size={32}
          color="white"
        />
      ),
      headerStyle: {
        backgroundColor: "#368C16"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 0.3,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: 250, height: 250 }}
            source={require("../assets/logo-hd.png")}
          />
        </View>
        <View
          style={{
            flex: 0.7,
            borderColor: "red",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Merchant EQ{" "}
            </Text>
            <Text style={styles.TextStyle}>is the camera hub that brings</Text>
          </View>
          <Text style={styles.TextStyle}>
            the right people,information, and tools
          </Text>
          <Text style={styles.TextStyle}>together to get work done. </Text>
          <Text style={styles.TextStyle}>
            From Fortune 100 companies to corner
          </Text>
          <Text style={styles.TextStyle}>
            markets, millions of people around
          </Text>
          <Text style={styles.TextStyle}>
            the world use Merchant EQ to connect
          </Text>
          <Text style={styles.TextStyle}>
            their teams, unify their systems, and
          </Text>
          <Text style={styles.TextStyle}>drive their business forward.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  TextStyle: {
    fontSize: 20
  }
});
