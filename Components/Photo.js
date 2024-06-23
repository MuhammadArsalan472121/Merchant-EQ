import React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import * as FaceDetector from "expo-face-detector";

const pictureSize = 120;

export default class Photo extends React.Component {
  state = {
    selected: false,
    faces: [],
    image: null
  };

  render() {
    const { uri } = this.props;
    return (
      <TouchableOpacity
        style={styles.pictureWrapper}
        onPress={() => {
          this.props.onImagePress(uri);
        }}
        activeOpacity={1}
      >
        <Image style={styles.picture} source={{ uri }} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    resizeMode: "contain"
  },
  pictureWrapper: {
    width: pictureSize,
    height: pictureSize,
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  }
});
