import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import configureStore from './configureStore';
import { Tag } from './Component/Label/Tag';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import { HomeScreen } from './Screen/HomeScreen';
import { AboutScreen } from './Screen/AboutScreen';
import { AdminScreen } from './Screen/AdminScreen';
import { LoginScreen } from './Screen/LoginScreen';

const store = configureStore();

class App extends Component {
  state = {
    appReady: false,
  };

  // se cargan todos los assets necesarios para la app
  loading = () => {
    console.log('HELP');
    //this.setState({appReady: true});
  };

  componentDidMount() {
    Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-extra-bold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
      'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    });
   }
   
  render() {
    const { appReady } = this.state;
    return !appReady ? (
      <AppLoading startAsync={this.loading} onFinish={() => this.setState({ appReady: true })} />
    ) : (
      <Provider store={store}  >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
         <HomeScreen />
      </View>
      </Provider>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
