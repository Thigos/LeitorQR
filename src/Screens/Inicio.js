import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';
import { loadFonts, globalStyles, inicStyles } from '../css/styles';
import { Balls } from '../Elements/elements';


export default function App( { navigation } ) {
  let loaded = loadFonts();

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={globalStyles.container}>
        <Balls></Balls>

        <Text style={globalStyles.title}>Projeto Interdiciplinar Biologia, PAM e PW</Text>
        <Image source={require('../img/tela1.png')}/>
        <Text style={globalStyles.text}>Navegue pelo app e descubra  como se previnir, se tratar e muito mais sobre algumas doenças que muitas vezes estamos expostos.</Text>
        <TouchableOpacity style={[globalStyles.button, inicStyles.button]} 
            onPress={() => navigation.navigate('Menu')}>
            <Text style={[globalStyles.title, {lineHeight: 45, height: '100%'}]}>AVANÇAR</Text>
        </TouchableOpacity>

      </View>
    );
  }


}