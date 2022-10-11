//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';

import Window from '../Width';

// create a component
const Box = ({product, press}) => {
  return (
    <View style={styles.container}>
      {product.map((el, i) => (
        <TouchableOpacity
          key={i}
          style={styles.click}
          onPress={() => press.push('Details', { cData: el })}
        >
          <Image source={el.image} style={styles.img} />
          <Text style={styles.name}>{el.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: Window.width,
    height:Window.height,
    backgroundColor: '#fff',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  click: {
    width: Window.width / 2.3,
    // padding: 5,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 5,
    backgroundColor: '#f6f6f6',
    marginBottom: 5,
  },
  img: {
    width: Window.width / 2.2,
    height: 140,
  },name:{
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 8,
    // fontWeight: 'bold',
  }
});

//make this component available to the app
export default Box;
