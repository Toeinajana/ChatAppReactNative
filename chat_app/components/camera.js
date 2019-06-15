
import React, { Component } from 'react';

import {
    TextInput,
    Dimensions,
    StyleSheet,
    Text, View,
    ImageBackground,
    TouchableOpacity,
    AsyncStorage,
    Image
} from 'react-native';

import { RNCamera } from 'react-native-camera';

const { width: WIDTH } = Dimensions.get('window')

export default class CameraPage extends React.Component {

    // constructor(props){
    //     super(props)

    //     // this.state = { name:''};

    //}

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };




    logInbtn = () => {

        this.props.navigation.navigate('chatpage', { name: this.state.name })

    }


    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (

            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref
                    }}
                    style={styles.view}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}
                />
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity style={styles.capture} id={'camerabtn'} onPress={this.takePicture.bind(this)}>
                        <Image source={{ uri: "https://img.icons8.com/ios/50/000000/screenshot-filled.png" }} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'

    },
    view: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'

    },

    capture: {
        flex: 0,
        backgroundColor: 'rgba(255,153,51,1)',
        width: 50,
        height: 50,
        borderRadius: 360,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },
    icon:{

        width:45,
        height:45,
        alignSelf:'center'
    
      },
});


