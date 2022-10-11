//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Window from '../Width';

// create a component
const Cart = () => {
  const [first, setFirst] = useState(1);
  const [sec, setSec] = useState(1);
  const [third, setThird] = useState(1);
  const [fourth, setFourth] = useState(1);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          <Image
            source={require('../../assets/pic6.jpg')}
            style={styles.img}
          />
          <View style={styles.name}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Panadol</Text>
            <View style={styles.qtyC}>
              <TouchableOpacity style={[styles.btn, styles.left]} onPress={() => setFirst(first-1)}>
                <Text style={styles.txt}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qty}>{first}</Text>
              <TouchableOpacity style={[styles.btn, styles.right]} onPress={() => setFirst(first+1)}>
                <Text style={styles.txt}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <AntDesign
            style={styles.icon}
            name="delete"
            size={24}
            color="black"
          />
        </View>
        <View style={styles.box}>
          <Image
            source={require('../../assets/pic3.jpg')}
            style={styles.img}
          />
          <View style={styles.name}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Panadol</Text>
            <View style={styles.qtyC}>
              <TouchableOpacity style={[styles.btn, styles.left]} onPress={() => setSec(sec-1)}>
                <Text style={styles.txt}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qty}>{sec}</Text>
              <TouchableOpacity style={[styles.btn, styles.right]} onPress={() => setSec(sec+1)}>
                <Text style={styles.txt}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <AntDesign
            style={styles.icon}
            name="delete"
            size={24}
            color="black"
          />
        </View>
        <View style={styles.box}>
          <Image
            source={require('../../assets/pic2.jpg')}
            style={styles.img}
          />
          <View style={styles.name}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Panadol</Text>
            <View style={styles.qtyC}>
              <TouchableOpacity style={[styles.btn, styles.left]} onPress={() => setThird(third-1)}>
                <Text style={styles.txt}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qty}>{third}</Text>
              <TouchableOpacity style={[styles.btn, styles.right]} onPress={() => setThird(third+1)}>
                <Text style={styles.txt}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <AntDesign
            style={styles.icon}
            name="delete"
            size={24}
            color="black"
          />
        </View>
        <View style={styles.box}>
          <Image
            source={require('../../assets/pic1.jpg')}
            style={styles.img}
          />
          <View style={styles.name}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Panadol</Text>
            <View style={styles.qtyC}>
              <TouchableOpacity style={[styles.btn, styles.left]} onPress={() => setFourth(fourth-1)}>
                <Text style={styles.txt}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qty}>{fourth}</Text>
              <TouchableOpacity style={[styles.btn, styles.right]} onPress={() => setFourth(fourth+1)}>
                <Text style={styles.txt}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <AntDesign
            style={styles.icon}
            name="delete"
            size={24}
            color="black"
          />
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
  },
  box: {
    width: Window.width / 1.1,
    height: 120,
    backgroundColor: '#f2f3f8',
    flexDirection: 'row',
    elevation: 10,
    borderRadius: 15,
    marginVertical: 8,
  },
  img: {
    width: Window.width / 2.5,
    height: 120,
  },
  name: {
    marginTop: 20,
    marginLeft: 10,
  },
  qtyC: {
    flexDirection: 'row',
    marginTop: 50,
    // marginLeft: 10,
  },
  btn: {
    width: 30,
    height: 25,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
  left: {
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  qty: {
    width: 20,
    textAlign: 'center',
    backgroundColor: 'lightgray',
  },
  icon: {
    alignSelf: 'center',
    marginLeft: 60,
  },txt:{
    fontSize:20,
  }
});

//make this component available to the app
export default Cart;
