import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
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

        <TouchableOpacity style={[globalStyles.button, {marginBottom: 20}]} 
            onPress={() => navigation.navigate('Leitor QR')}>
            <Text style={[globalStyles.title, {lineHeight: 50, height: '100%'}]}>Leitor QR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[globalStyles.button, {marginBottom: 20}]} 
            onPress={() => navigation.navigate('Devs')}>
            <Text style={[globalStyles.title, {lineHeight: 50, height: '100%'}]}>Desenvolvedores</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[globalStyles.button]} 
            onPress={() => navigation.navigate('Inicio')}>
            <Text style={[globalStyles.title, {lineHeight: 50, height: '100%'}]}>Voltar</Text>
        </TouchableOpacity>

      </View>
    );
  }


}