//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//import Local Files Here
import Topbar from './mainScfiles/top';
import Catagory from './mainScfiles/cat';
import Window from './Width';
import Slidestop from './mainScfiles/slide';


// create a component
const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Topbar />
            <Slidestop />
            <Catagory />
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // marginTop:30,
    },
});

//make this component available to the app
export default MainScreen;
