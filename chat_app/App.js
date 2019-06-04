import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LogIn from "./components/login";
import chatPage from "./components/chatpage";


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
});

export default createAppContainer(AppNavigator);
