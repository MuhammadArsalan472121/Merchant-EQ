import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform
} from "react-native";

import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

import isIPhoneX from "react-native-is-iphonex";

export default class HomeScreen extends React.Component {
  static navigationOptions = { header: null };

  state = {
    type: "back",
    permissionsGranted: false,
    disableShutterButton: false
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ permissionsGranted: status === "granted" });
  }

  componentDidMount() {
    FileSystem.makeDirectoryAsync(
      FileSystem.documentDirectory + "photos"
    ).catch(e => {
      console.log(e, "Directory exists");
    });
  }

  toggleFacing = () => this.setState({ type: this.state.type === "back" ? "front" : "back" });

  takePicture = () => {
    if (this.camera) {
      this.setState({ disableShutterButton: true });
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  };

  onPictureSaved = async photo => {
    const imageFileUri = `${
      FileSystem.documentDirectory
    }photos/${Date.now()}.jpg`;
    await FileSystem.moveAsync({
      from: photo.uri,
      to: imageFileUri
    });
    this.props.navigation.push("Image", { ImageUri: imageFileUri });
  };

  renderNoPermissions = () => (
    <View style={styles.noPermissions}>
      <Text style={{ color: "white" }}>
        Camera permissions not granted - cannot open camera preview.
      </Text>
    </View>
  );

  renderTopBar = () => (
    <View style={styles.topBar}>
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => {
          this.props.navigation.openDrawer();
        }}
      >
        <Ionicons
          name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
          size={32}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton} onPress={this.toggleFacing}>
        <Ionicons
          name={
            Platform.OS === "ios" ? "ios-reverse-camera" : "md-reverse-camera"
          }
          size={32}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );

  renderBottomBar = () => (
    <View style={styles.bottomBar}>
      <View style={{ flex: 0.4 }}>
        <TouchableOpacity
          // disabled={this.state.disableShutterButton}
          onPress={this.takePicture}
          style={{ alignSelf: "center" }}
        >
          <Ionicons
            name={
              Platform.OS === "ios"
                ? "ios-radio-button-on"
                : "md-radio-button-on"
            }
            size={70}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  renderCamera = () => (
    <View style={{ flex: 1 }}>
      <Camera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.camera}
        type={this.state.type}
      >
        {this.renderTopBar()}
        {this.renderBottomBar()}
      </Camera>
    </View>
  );

  render() {
    const cameraScreenContent = this.state.permissionsGranted
      ? this.renderCamera()
      : this.renderNoPermissions();
    return <View style={styles.container}>{cameraScreenContent}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  camera: {
    flex: 1,
    justifyContent: "space-between"
  },
  topBar: {
    flex: 0.2,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight / 2
  },
  bottomBar: {
    paddingBottom: isIPhoneX ? 25 : 5,
    backgroundColor: "transparent",
    alignSelf: "center",
    flex: 0.12,
    flexDirection: "row"
  },
  noPermissions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  toggleButton: {
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    padding: 5
  },
  row: {
    flexDirection: "row"
  }
});
