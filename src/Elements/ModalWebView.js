import React, { useState } from "react";
import { 
  View,     
  Text, 
  Dimensions, 
  TouchableOpacity, 
  Modal,
  Linking
} from "react-native";
import MaskedView from '@react-native-masked-view/masked-view';
import { WebView } from 'react-native-webview';
import { globalStyles, ModalWebViewStyles } from '../css/styles';



const { width, height } = Dimensions.get("window");

const ModalWebView = (props) => (
    <Modal animationType="slide" transparent={true} visible={props.modalVisible}>
        <View style={ModalWebViewStyles.container} >
          {/*<WebView
            style={{ width: '100%', height: '100%' }}
            source={{ uri: props.url }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
          />*/}
          <MaskedView
            style={{marginTop: 10}}
            maskElement={
              <View style={ModalWebViewStyles.webViewContainer}></View>
            }>
            <WebView
              style={{ width: width-50, height: height-80}}
              source={{ uri: props.url }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              startInLoadingState={true}
            />
        </MaskedView>
        </View>
        <View style={ModalWebViewStyles.buttonContainer}>
          <TouchableOpacity style={ModalWebViewStyles.button} 
              onPress={props.closeEvent}>
              <Text style={[globalStyles.text, {lineHeight: 40, height: '100%'}]}>Fechar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ModalWebViewStyles.button} 
              onPress={() => Linking.openURL(props.url)}>
              <Text style={[globalStyles.text, {lineHeight: 40, height: '100%'}]}>Abrir</Text>
          </TouchableOpacity>
        </View>
    </Modal>
  
);


export default ModalWebView;