import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import { AboutScreen } from "./AboutScreen";
import { RegisterScreen } from "./RegisterScreen";
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
          title="ABOUT"
          color="orange"
  accessibilityLabel="About"
           onPress={() => navigate('About')}
        ></Button>

<Button
          title="REGISTER"
          color="orange"
  accessibilityLabel="To Register"
           onPress={() => navigate('Register')}
        ></Button>

<Button
          title="LOGIN"
          color="orange"
  accessibilityLabel="To Login"
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
  Register: {
    screen: RegisterScreen      
  },
  Login: {
    screen: LoginScreen      
  }
});

export default createAppContainer(AppNavigator);
