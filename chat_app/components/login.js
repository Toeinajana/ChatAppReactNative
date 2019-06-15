
import React, {Component} from 'react';

import {
  TextInput,
  Dimensions, 
  StyleSheet, 
  Text, View, 
  ImageBackground,
  TouchableOpacity,
} from 'react-native';




const { width: WIDTH } = Dimensions.get('window')

export default class LogIn extends React.Component {

  
    handleChange = name => this.setState({name});
    
    state = { name:''};


    logInbtn = () => {

      this.props.navigation.navigate('chatpage', { name: this.state.name })
      
    }
    
componentDidMount(){
  console.log(this.props)
}

  render() {
    return (
      <ImageBackground source={require('../img/bg3.jpg')} style={styles.background}>
         <View>
           <Text style={styles.welcomeText}>Welcome to Chatty</Text>
         </View>

         <View>
         
         
           <TextInput
               id={'name'}
               style={styles.textInput}
               placeholder={'Enter your name please'}
               placeholderTextColor={'black'}
               value = {this.state.name}
               onChangeText={this.handleChange}
             
            />

         </View>
        
         <TouchableOpacity style={styles.loginBtn} id={'loginbtn'} onPress={this.logInbtn}>
           <Text style={styles.loginText}>Enter</Text>
         </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  welcomeText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    letterSpacing: 5,
    textShadowColor: 'rgba(255,255,102,1)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 4
    
  },
  textInput: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor:'grey',
    color:'black',
    marginHorizontal:25,
    opacity: 0.80,
    marginBottom: 20,
    marginTop: 50

  },
  textInput2: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor:'grey',
    color:'black',
    marginHorizontal:25,
    opacity: 0.80
    // marginBottom: 100,

  },
  loginBtn: {
    width: 100,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    backgroundColor:'rgba(255,153,51,1)',
    justifyContent: 'center',
    marginTop: 20

  },

  loginText:{
    color:'white',
    fontSize: 16,
    textAlign:'center'

   

  }
  
});


