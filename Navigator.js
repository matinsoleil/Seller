import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import ListScreen from './Screen/ListScreen';
import ConfigScreen from './Screen/ConfigScreen';
import HomeScreen from './Screen/HomeScreen';

const MainNavigator = createStackNavigator({
  ListScreen: {screen: ListScreen},
  ConfigScreen: {screen: ConfigScreen},
  HomeScreen: {screen: HomeScreen}
},{
  initialRouteName: 'HomeScreen',
});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;