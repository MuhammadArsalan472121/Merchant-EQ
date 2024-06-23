import React from "react";
import { View, Text, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconTab = ({ txtLabel, OnPress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5
      }}
    >
      <View>
        <Text style={{ fontSize: 20 }}>{txtLabel}</Text>
      </View>
      <View>
        <Ionicons
          onPress={OnPress}
          name={
            Platform.OS === "ios" ? "ios-arrow-forward" : "md-arrow-dropright"
          }
          style={{ paddingLeft: 10 }}
          size={40}
          color="#B6B6B6"
        />
      </View>
    </View>
  );
};

export default IconTab;
