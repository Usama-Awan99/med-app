//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

//import Local Files Here
import Topbar from './top';
import Catagory from './cat';
import Window from '../Width';
import Slidestop from './slide';
import DailyMed from './dailmed';

// create a component
const MainScreen = ({navigation}) => {
    const meds = [
        { 
            name: 'Penadol',
            image: require('../../assets/pic1.jpg'),
            des: "PANADOL EXTRA TABS 24 | Cunninghams Pharmacy | Ireland"
        },
        { 
            name: 'Augmentin',
            image: require('../../assets/pic2.jpg'),
            des: "Augmentin Ds 312mg — DVAGO"
        },
        { 
            name: 'Eye Drops',
            image: require('../../assets/pic3.jpg'),
            des: "Buy Contacts® Eye Drops 15 mL by Refresh Online | Priceline"
        },
        { 
            name: 'Himalaya Curcumin',
            image: require('../../assets/pic4.jpg'),
            des: "Himalaya Curcumin Complete® -- 30 Vegetarian Capsules - Vitacost"
        },
        { 
            name: 'Leflox 500mg',
            image: require('../../assets/pic7.png'),
            des: "Leflox 500mg 7 Tablets | Droguri | Producția"
        }
    ]
    const suppliments = [
        { 
            name: 'Creatine Powder',
            image: require('../../assets/pic5.jpg'),
            des: "Micronised Creatine Powder, Unflavoured, 1.2 kg - Supplement Online"
        },
        { 
            name: 'Whey Protein',
            image: require('../../assets/pic6.jpg'),
            des: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lb"
        },
        { 
            name: 'NOW Supplements',
            image: require('../../assets/pic8.jpg'),
            des: "NOW Supplements, Omega-3 180 EPA / 120 DHA, Molecularly Distilled"
        },
        
    ]



  return (
    <View style={styles.container}>
      <Topbar press={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Slidestop />
        <Catagory />
        <DailyMed head="Daily Essential Medicine" products={meds} press={navigation} />
        <DailyMed head="Suppliments" products={suppliments} press={navigation} />
      </ScrollView>
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
