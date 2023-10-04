import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'

import inicio from './componentes/inicio';

// Crie uma pilha de navegação
const Stack = createStackNavigator();

// Adicione a tela à navegação
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* ... outras telas */}
        <Stack.Screen name="inicio" component={inicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
