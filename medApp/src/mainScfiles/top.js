//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import Local Files Here
import Window from '../Width';


// create a component
const TopJs = () => {
    return (
        <View style={styles.top}>
            <Text style={styles.head}>HealthMeds</Text>
            <Text style={styles.suptxt}>Deliver All Over Pakistan</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    top: {
        width: Window.width,
        height: Window.height / 6,
        backgroundColor: 'green',
        justifyContent: 'flex-end',
        padding:20,
    },
    head: {
        color: '#fff',
        fontSize:30,
        fontWeight: 'bold',
    },
    suptxt: {
        color: '#fff',
        marginTop: 5,
    }
});

//make this component available to the app
export default TopJs;
