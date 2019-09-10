import React from "react";
import { View, Text, TextInput,Button ,StyleSheet  } from "react-native";


export class RegisterScreen extends React.Component {
  
  
  Register = (text) => {
    console.log('HELP'+text);
    //this.setState({appReady: true});
  };

  Send = (data) => {

      console.log('send');

  }

 
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        

        <Text>Register</Text>

        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Numero Movil"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText={text=>this.Register(text)}/>

        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText={text=>this.Register(text)}/>

        <Button title="ENVIAR" onPress={() => this.Send('Simple Button pressed')} />      

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  }
})
