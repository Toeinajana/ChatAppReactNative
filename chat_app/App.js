/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';

// import {
//   StyleSheet, 
//   Text, 
//   View, 
// } from 'react-native';

// import {StackNavigator} from 'react-navigation';
// import Login from './components/login'



// const MainNav = StackNavigator({
//   Home: {screen: Login}
// });


// export default class App extends React.Component {


//   render() {
//     return (
//       <MainNav/>
//     );
//   }
// }

// const styles = StyleSheet.create({
  
  
// });


import React, {Component} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import {
  TextInput,
  Dimensions, 
  StyleSheet, 
  Text, View, 
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import backgroundImg from './img/bg3.jpg'
// import {createStackNavigator, createAppContainer} from 'react-navigation';

// library.add(faUser, faLock)

const { width: WIDTH } = Dimensions.get('window')

export default class App extends React.Component {

  // constructor(){
  //   
  // }

  render() {
    return (
      <ImageBackground source={backgroundImg} style={styles.background}>
         <View>
           <Text style={styles.welcomeText}>Welcome to Chatty</Text>
         </View>

         <View>
         
         {/* <FontAwesomeIcon icon={ faUser } style={ styles.iconInput } /> */}
           <TextInput
               style={styles.textInput}
               placeholder={'Username'}
               placeholderTextColor={'black'}
            />

         </View>
         <View>
         {/* <FontAwesomeIcon icon={ faLock } style={ styles.iconInput } /> */}
         <TextInput
               style={styles.textInput2}
               placeholder={'Password'}
               placeholderTextColor={'black'}
            />

         </View>

         <TouchableOpacity style={styles.loginBtn}>
           <Text style={styles.loginText}>Login</Text>
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
