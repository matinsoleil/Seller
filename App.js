import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, AppLoading } from 'expo';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import { Tag } from './Component/Label/Tag';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import { HomeScreen } from './Screen/HomeScreen';
import { AboutScreen } from './Screen/AboutScreen';

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
