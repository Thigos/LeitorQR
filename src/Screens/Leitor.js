import React, { useState, useEffect } from 'react';
import { Text, View, Vibration } from 'react-native';
import { Camera } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import MaskedView from '@react-native-masked-view/masked-view';
import AppLoading from 'expo-app-loading';
import { loadFonts, globalStyles, qrCodeStyles } from '../css/styles';
import { Balls } from '../Elements/elements';
import ModalWebView from '../Elements/ModalWebView';


export default function App( { navigation } ) {
  let loaded = loadFonts();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(undefined);
  const [modalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState('');


  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    Vibration.vibrate(100);
    console.log(data);
    setUrl(data);
    setModalVisible(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onBackPress = () => {
    navigation.navigate('Menu');
  };

  const closeEvent = () => {
    setModalVisible(false);
    setScanned(false);
  }

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={globalStyles.container}>
        <Balls></Balls>
        <Ionicons onPress={onBackPress} style={globalStyles.backArrow} name="arrow-back" size={40} color="black" />

        <Text style={globalStyles.title}>QRCode</Text>
        <Text style={globalStyles.text}>Leia o QR Code para acessar o site e obter mais informações.</Text>

        <MaskedView
          maskElement={
            <View style={qrCodeStyles.box}></View>
          }>
          <Camera
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={qrCodeStyles.camera}
            barCodeScannerSettings={{
              barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
            }}
          />
        </MaskedView>

        <ModalWebView modalVisible={modalVisible} url={url} closeEvent={closeEvent}></ModalWebView>

      </View>
    );
  }


}