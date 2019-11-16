import React from "react";
import { View, Text, Button } from "react-native";

import { connect } from 'react-redux';
import { getCounter } from '../axion/selectors/counter';
import { incrementCounter } from '../axion/actions/counter';

class HomeScreen extends React.Component {
  constructor(props) {
		super(props);
  }
  
  Send = (data) => {

    console.log(data);

    this.props.incrementCounter('hello');

}


  render() {
    console.log(this.props);

    const {navigate} = this.props.navigation;
  
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>


      <Button
        title="Config"
        onPress={() => navigate('ConfigScreen', {name: 'Jane'})}
      />
      <Button title="ENVIAR" onPress={() => this.Send('Simple Button pressed')} />  
 
  <Text>Home Screen AB :{this.props.counter}</Text>
      </View>
    );
  }
}




const mapStateToProps = (state) => {
  return {
    counter:getCounter(state)
 }
};


const mapDispatchToProps = dispatch => {
  
  return {
    incrementCounter: (message) => {
        dispatch(incrementCounter(message))
    }

}
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);