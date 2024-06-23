import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { Text, View, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default class DrawerContentComponent extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.headerContainer}>
          <Image source={require('./assets/icon.png')} />
        </View> */}
        <View style={styles.screenContainer}>
          <View
            style={[
              styles.screenStyle,
              this.props.activeItemKey == "Home"
                ? styles.activeBackgroundColor
                : null
            ]}
          >
            <FontAwesome name="home" size={32} color="#368C16" />
            <Text
              style={[
                styles.screenTextStyle,
                {color: 'white'}
                // this.props.activeItemKey == "Home"
                //   ? styles.selectedTextStyle
                //   : styles.unSelectedTextStyle
              ]}
              onPress={this.navigateToScreen("Home")}
            >
              Home
            </Text>
          </View>
          <View
            style={[
              styles.screenStyle,
            //   this.props.activeItemKey == "Gallery"
            //     ? styles.activeBackgroundColor
            //     : null
            {color: 'white'}
            ]}
          >
            <FontAwesome name="image" size={26} color="#368C16" />  
            <Text
              style={[
                styles.screenTextStyle,
                // this.props.activeItemKey == "Gallery"
                //   ? styles.selectedTextStyle
                //   : null
                {color: 'white'}
              ]}
              onPress={this.navigateToScreen("Gallery")}
            >
              Browse Photo
            </Text>
          </View>
          <View
            style={[
              styles.screenStyle,
            //   this.props.activeItemKey == "Settings"
            //     ? styles.activeBackgroundColor
            //     : null
            {color: 'white'}
            ]}
          >
              <FontAwesome name="cog" size={32} color="#368C16" />
            <Text
              style={[
                styles.screenTextStyle,
                // this.props.activeItemKey == "Settings"
                //   ? styles.selectedTextStyle
                //   : null
                {color: 'white'}
              ]}
              onPress={this.navigateToScreen("Settings")}
            >
              Settings
            </Text>
          </View>
          <View
            style={[
              styles.screenStyle,
              this.props.activeItemKey == "About"
                ? styles.activeBackgroundColor
                : null
            ]}
          >
              <FontAwesome name="info-circle" size={32} color="#368C16" />
            <Text
              style={[
                styles.screenTextStyle,
                // this.props.activeItemKey == "About"
                //   ? styles.selectedTextStyle
                //   : null
                {color: 'white'}
              ]}
              onPress={this.navigateToScreen("About")}
            >
              About
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  headerContainer: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'    
  },
  headerText: {
    color: "#fff8f8"
  },
  screenContainer: {
    paddingTop: 60,
    width: "100%"
  },
  screenStyle: {
    paddingLeft: 10,
    height: 60,
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },
  screenTextStyle: {
    fontSize: 20,
    marginLeft: 20,
    textAlign: "center"
  },
  selectedTextStyle: {
    fontWeight: "bold",
    color: "#fff"
  },
  unSelectedTextStyle: {
    fontWeight: "bold",
    color: "#fff"
  },
  activeBackgroundColor: {
    // backgroundColor: "grey"
  }
});
