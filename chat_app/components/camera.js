
import React, { Component } from 'react';

import {
    TextInput,
    Dimensions,
    StyleSheet,
    Text, View,
    ImageBackground,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';


const { width: WIDTH } = Dimensions.get('window')

export default class Camera extends React.Component {

    // constructor(props){
    //     super(props)

    //     // this.state = { name:''};

    //}



    logInbtn = () => {

        this.props.navigation.navigate('chatpage', { name: this.state.name })

    }


    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <ImageBackground source={require('../img/bg3.jpg')} style={styles.background}>
                <View>
                    <Text>Camera module</Text>
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

    }

});


