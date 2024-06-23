import React, { Component } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Switch,
  Platform,
  Slider
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IconTab from "../Components/IconTab";
export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = "";
    this.state = { SliderValue: 0 };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Settings",
      headerLeft: () => (
        <Ionicons
          onPress={() => navigation.openDrawer()}
          name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
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
  state = { switchValue: true, switchValue2: true };
  toggleSwitch = (name, value) => {
    this.setState({ [name]: value });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.5 }}>
          <IconTab txtLabel="Currency" />
          <IconTab txtLabel="Configure Siri Shortcuts" />
          <IconTab txtLabel="Reorder Channels" />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 5
            }}
          >
            <Text style={{ fontSize: 20 }}>Manage Lighting</Text>
            <Switch
              onValueChange={value => this.toggleSwitch("switchValue", value)}
              value={this.state.switchValue}
            />
          </View>
          <View>
            <TextInput
              style={{
                height: 40,
                fontSize: 22,
                margin: 10,
                color: "#00137F",
                borderColor: "gray",
                backgroundColor: "gray"
              }}
              onChangeText={text => this.setState({ text })}
              placeholder="You can write Text Here!"
              value={this.state.text}
            />
          </View>
        </View>

        <View style={{ flex: 0.3 }}>
          <Text style={{ color: "#6D6D6D", paddingLeft: 5 }}>SPEECH</Text>
          <View>
            <IconTab txtLabel="Select Voice" />
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={30}
              minimumTrackTintColor="#009688"
              onValueChange={ChangedValue =>
                this.setState({ SliderValue: ChangedValue })
              }
              style={{ width: "100%" }}
            />
          </View>
          <Text style={{ color: "#6D6D6D", paddingLeft: 5 }}>
            Adjust speech for announcements.
          </Text>
          <Text style={{ color: "#6D6D6D", paddingLeft: 5 }}>
            This setting will not affect VoiceOver users.
          </Text>
        </View>

        <View style={{ flex: 0.2 }}>
          <Text style={{ color: "#6D6D6D", paddingLeft: 5 }}>
            BROWSE PHOTOS
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 5
            }}
          >
            <Text style={{ fontSize: 20 }}>Show Newest Photos First</Text>
            <Switch
              onValueChange={value => this.toggleSwitch("switchValue2", value)}
              value={this.state.switchValue2}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5
  }
});
