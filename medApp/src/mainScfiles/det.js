//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';

import Window from '../Width';

// create a component
const Details = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Image source={route.params.cData.image} style={styles.img} />
            <View style={{flex: 1}}>
                <Text style={styles.head}>Details:</Text>
                <Text style={styles.des}>{route.params.cData.des}</Text>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push('Cart')}>
                    <Text style={styles.btntxt}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    img:{
        width:Window.width,
        height: 200,
        marginBottom: 20,
        marginTop: 30
    },
    head:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 15,
    },
    des:{
        paddingLeft: 10,
        fontSize: 18
    },
    btn: {
        position: 'absolute',
        bottom: 120,
        left: Window.width/3.5,
        backgroundColor: 'green',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius:35,
    },
    btntxt: {
        color: 'white',
        fontSize: 18,
    }
});

//make this component available to the app
export default Details;
