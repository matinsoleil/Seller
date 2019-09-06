import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import { AboutScreen } from "./AboutScreen";
import { AdminScreen } from "./AdminScreen";
import { LoginScreen } from "./LoginScreen";

export class HomeScreen extends React.Component {
  constructor(props) {
		super(props);
	}
  render() {
    const { navigate } = this.props.navigation; 
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="GOING TO"
          color="orange"
  accessibilityLabel="Tap to Decrypt Data"
           onPress={() => navigate('About')}
        ></Button>

<Button
          title="ADMIN"
          color="orange"
  accessibilityLabel="Tap to Decrypt Data"
           onPress={() => navigate('Admin')}
        ></Button>

<Button
          title="LOGIN"
          color="orange"
  accessibilityLabel="Tap to Decrypt Data"
           onPress={() => navigate('Login')}
        ></Button>       

  <Text>Home Screen AB</Text>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen      
  },
  Admin: {
    screen: AdminScreen      
  },
  Login: {
    screen: LoginScreen      
  }
});

export default createAppContainer(AppNavigator);