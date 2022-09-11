import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import Ionicons from '@expo/vector-icons/Ionicons';
import { loadFonts, globalStyles } from '../css/styles';
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



      </View>
    );
  }
}