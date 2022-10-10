//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import Window from '../Width';

// create a component
const DailyMed = ({head, products, press}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>{head}</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{paddingBottom: 15,}}
      > 
        {products.map( (el,i) => (
        <TouchableOpacity key={i} style={styles.click} onPress={() => press.push('Details')}>
          
          <Image
            source={el.image}
            style={styles.img}
          />
          <Text style={styles.name}>{el.name}</Text>
        </TouchableOpacity>))}
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  head:{
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  click: {
    width: Window.width / 2.1,
    // padding: 5,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 5,
    backgroundColor: '#f6f6f6'
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
export default DailyMed;
