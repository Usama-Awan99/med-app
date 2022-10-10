//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Slidestop = () => {
    const images = [
        require('../../assets/slide1.jpg'),
        require('../../assets/slide2.jpg'),
        require('../../assets/slide3.jpg'),
    ] 

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/slide1.jpg')} style={styles.img} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: '#2c3e50',
    },
    img: {
        
    }
});

//make this component available to the app
export default Slidestop;
