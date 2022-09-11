import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import AppLoading from 'expo-app-loading';
import Ionicons from '@expo/vector-icons/Ionicons';
import { loadFonts, globalStyles, devStyles } from '../css/styles';
import { Balls } from '../Elements/elements';


export default function App( { navigation } ) {
  let loaded = loadFonts();

  const onBackPress = () => {
    navigation.navigate('Menu');
  };

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={globalStyles.container}>
        <Balls></Balls>
        <Ionicons onPress={onBackPress} style={globalStyles.backArrow} name="arrow-back" size={40} color="black" />

        <View style={devStyles.container}>
            <View style={devStyles.topContainer}>
                <View style={devStyles.imageContainer}>
                    <Image source={{ uri: 'https://avatars.githubusercontent.com/u/67590378?v=4'}} style={devStyles.image}/>
                    <Image style={devStyles.emoji} source={{ uri: 'https://github.githubassets.com/images/icons/emoji/unicode/1f419.png'}} />
                </View>
                <View style={devStyles.infos}>
                    <Text style={devStyles.title}>Thiago M.</Text>
                    <Text style={devStyles.text}>Thigos</Text>
                    <Text style={[devStyles.text, {fontSize: 13}]}>¯\_(ツ)_/¯</Text>
                </View>
            </View>
            <View style={devStyles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://github.com/Thigos')}
                    style={devStyles.button}>
                    <Text style={[devStyles.text, {fontSize: 15}]}>Visit Profile</Text>
                </TouchableOpacity>
            </View>
        </View>

        {/*Outro Perfil*/}
        <View style={[devStyles.container, {marginTop: 40}]}>
            <View style={devStyles.topContainer}>
                <View style={devStyles.imageContainer}>
                    <Image source={{ uri: 'https://avatars.githubusercontent.com/u/72138192?v=4'}} style={devStyles.image}/>
                    <Image style={devStyles.emoji} source={{ uri: 'https://github.githubassets.com/images/icons/emoji/unicode/1f609.png'}} />
                </View>
                <View style={devStyles.infos}>
                    <Text style={devStyles.title}>Kauanny {'\n'} Tenorio</Text>
                    <Text style={devStyles.text}>KakauFelix</Text>
                </View>
            </View>
            <View style={devStyles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://github.com/KakauFelix')}
                    style={devStyles.button}>
                    <Text style={[devStyles.text, {fontSize: 15}]}>Visit Profile</Text>
                </TouchableOpacity>
            </View>
        </View>

      </View>
    );
  }
}