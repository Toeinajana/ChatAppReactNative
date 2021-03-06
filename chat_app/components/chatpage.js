
import React, { Component } from 'react';
import moment from "moment";
import axios from "axios"

import {
  TextInput,
  Dimensions,
  StyleSheet,
  Text, View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

import io from "socket.io-client";


const { width: WIDTH } = Dimensions.get('window')


export default class ChatPage extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Welcome to chat room!',
  });

  constructor(props) {
    super(props)

    this.state = {
      chatMessage: "",
      chatMessages: [],
      name: "",
      currentDate: new Date(),
    };

  }

  componentDidMount() {

    console.log(this.state)
   // get data from database
    axios('http://localhost:5000/chat_app').then((response)=>{
      
        this.setState({users: response.data});
        // console.log(this.state);

    })
    .catch(function(error){

      console.log(error);
    })
    
    
    //user's name 
    const userName = this.props.navigation.state.params.name
    this.setState({name: userName})
    //call socket
    this.socket = io("http://192.168.1.141:5000");
    this.socket.on("chat message", msg => {
        
      // message obj
        const messageWithName = `${msg.name}: ${msg.chat}`
      this.setState({ chatMessages: [...this.state.chatMessages, messageWithName] }, ()=>{
        console.log(this.state)
      });
    });
  }

  // send chat
  submitChat() {
    const chatObj = {
      name: this.state.name,
      chat: this.state.chatMessage,
      
    }
    this.socket.emit("chat message", chatObj);
    this.setState({ chatMessage: "" });

  }

  cameraBtn = () => {

    this.props.navigation.navigate('camera')
    
  }



  render() {

    //time
    const today = this.state.currentDate;
    const time = moment(today).format("LT");
    //chat obj
    const chatMessages = this.state.chatMessages.map(chatMessage => <Text key={chatMessage}> {chatMessage} <Text style={styles.time}>{"  "}{"("}{time}{")"}{"\n"}{"________________________________"}{"\n"}</Text></Text>)


    return (

      <ImageBackground source={require('../img/bg3.jpg')} style={styles.background}>

        <View style={styles.container}>

          <ScrollView style={styles.container2}>
         


            <Text style={styles.chatText}>{chatMessages}</Text>

          </ScrollView>

        
        <View style={styles.container3}>
          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            placeholder={'Type here and press enter'}
            value={this.state.chatMessage}
            onSubmitEditing={() => this.submitChat()}
            onChangeText={chatMessage => {
              this.setState({ chatMessage });
            }}
          />
          <TouchableOpacity  style={styles.btnCamera} id={'camerabtn'} onPress={this.cameraBtn}>
          <Image source = {{uri:"https://img.icons8.com/ios/50/000000/screenshot-filled.png"}} style={styles.icon}/>
          </TouchableOpacity>
        </View>
        </View>
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
    opacity: 0.80,

  },
  time: {
    alignSelf: 'flex-end',
    fontSize: 12,
  },
  line: {

    justifyContent:'center',
  },

  icon:{

    width:32,
    height:32,
    alignSelf:'center'

  },

  container: {
    flex: 1


  },
  container2: {

    backgroundColor: 'white',
    opacity: 0.80,
    borderRadius: 45,
    marginBottom: 10,
    marginTop: 10,
    opacity: 0.80,

  },

  container3: {

    flexDirection: 'row'

  },

  btnCamera: {

    backgroundColor:'rgba(255,153,51,1)',
    width:43,
    height:43,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
    marginLeft: 5

  },

  chatText: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 30,
    paddingBottom: 30,
    letterSpacing: 5,
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 300,
    padding: 5,


  },
  textInput: {
    width: WIDTH - 60,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 10,

    backgroundColor: 'grey',
    color: 'black',

    opacity: 0.80,


  }
});
