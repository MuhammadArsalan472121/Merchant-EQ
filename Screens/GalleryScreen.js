import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Platform
} from "react-native";

import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

import { Ionicons } from "@expo/vector-icons";
import Photo from "../Components/Photo";

const PHOTOS_DIR = FileSystem.documentDirectory + "photos";

export default class GalleryScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Gallery",
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

  state = {
    photos: [],
    selected: []
  };

  componentDidMount = async () => {
    const photos = await FileSystem.readDirectoryAsync(PHOTOS_DIR);
    this.setState({ photos });
  };  

  saveToGallery = async () => {
    const photos = this.state.selected;

    if (photos.length > 0) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== "granted") {
        throw new Error("Denied CAMERA_ROLL permissions!");
      }

      const promises = photos.map(photoUri => {
        return MediaLibrary.createAssetAsync(photoUri);
      });

      await Promise.all(promises);
      alert("Successfully saved photos to user's gallery!");
    } else {
      alert("No photos to save!");
    }
  };

  renderPhoto = fileName => (
    <Photo
      onImagePress={this.navigateToImageScreen}
      key={fileName}
      uri={`${PHOTOS_DIR}/${fileName}`}      
    />
  );

  navigateToImageScreen = imageUri => {
    this.props.navigation.navigate("Image", { ImageUri: imageUri });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentComponentStyle={{ flex: 1 }}>
          <View style={styles.pictures}>
            {this.state.photos.map(this.renderPhoto)}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white"
  },
  pictures: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingLeft: 8,
    paddingRight: 8,
    paddingVertical: 8
  }  
});
