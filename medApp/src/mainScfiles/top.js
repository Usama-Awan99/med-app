//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

// import Local Files Here
import Window from '../Width';

// create a component
const TopJs = ({press}) => {
  return (
    <View style={styles.top}>
      <View>
        <Text style={styles.head}>HealthMeds</Text>
        <Text style={styles.suptxt}>Deliver All Over Pakistan</Text>
      </View>
      <TouchableOpacity onPress={() => press.push('Cart')}>
        <Entypo name="shopping-cart" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  top: {
    width: Window.width,
    height: Window.height / 6,
    backgroundColor: 'green',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  head: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  suptxt: {
    color: '#fff',
    marginTop: 5,
  },
});

//make this component available to the app
export default TopJs;
