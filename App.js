import * as React from 'react';
import { Button, View, Text, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import inicio from './src/Screens/Inicio';
import menu from './src/Screens/menu';
import leitor from './src/Screens/Leitor';
import devs from './src/Screens/Devs';

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Inicio" component={inicio} />
        <Stack.Screen name="Menu" component={menu} />
        <Stack.Screen name="Leitor QR" component={leitor} />
        <Stack.Screen name="Devs" component={devs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
