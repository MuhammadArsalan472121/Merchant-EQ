import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./Screens/HomeScreen";
import GalleryScreen from "./Screens/GalleryScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import AboutScreen from "./Screens/AboutScreen";
import DrawerContentComponent from "./Components/DrawerContentComponent";
import ImageScreen from "./Screens/ImageScreen";

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: createStackNavigator({
        Home: HomeScreen,
        Image: ImageScreen
      })
    },
    Gallery: {
      screen: createStackNavigator({
        Gallery: GalleryScreen,
        Image: ImageScreen
      })
    },
    Settings: {
      screen: createStackNavigator({ Settings: SettingsScreen })
    },
    About: {
      screen: createStackNavigator({ About: AboutScreen })
    }
  },
  {
    contentComponent: DrawerContentComponent
  }
);

export default createAppContainer(MyDrawerNavigator);
