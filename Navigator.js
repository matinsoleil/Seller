import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import ListScreen from './Screen/ListScreen';
import ConfigScreen from './Screen/ConfigScreen';
import HomeScreen from './Screen/HomeScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';

const MainNavigator = createStackNavigator({
  LoginScreen: {screen: LoginScreen},
  RegisterScreen: {screen: RegisterScreen},
  ListScreen: {screen: ListScreen},
  ConfigScreen: {screen: ConfigScreen},
  HomeScreen: {screen: HomeScreen}
},{
  initialRouteName: 'HomeScreen',
});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;