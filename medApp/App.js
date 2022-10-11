import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//import Local Files Here
import Dashboard from './src/dash';
import Details from './src/mainScfiles/det';
import Cart from './src/mainScfiles/cart';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Cart" component={Cart} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


