//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Window from '../Width';

// create a component
const Catagory = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Image
          source={require('../../assets/medicine.jpg')}
          style={styles.img}
        />
        <Text style={styles.txt}>Order Medicine</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Image
          source={require('../../assets/healthcare.jpg')}
          style={styles.img}
        />
        <Text style={styles.txt}>HealthCare Products</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    flexDirection: 'row',
    width: Window.width,
    justifyContent: 'space-between',
    marginTop: 15,
    padding: 15,
  },
  btn:{
    width:150,
    height: 100,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray'
  },
  img: {
    width: 60,
    height: 60,
  },txt:{
    marginTop: 5,
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  }
});

//make this component available to the app
export default Catagory;
