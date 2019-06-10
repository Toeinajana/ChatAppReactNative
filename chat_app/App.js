import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LogIn from "./components/login";
import chatPage from "./components/chatpage";
// import Auth from "./components/auth";



class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: LogIn
  },
  chatpage: {
    screen: chatPage
  },
  // auth: {
  //   screen: Auth
  // },
});

export default createAppContainer(AppNavigator);
