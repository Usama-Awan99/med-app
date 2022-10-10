import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { ColorfulTabBar } from 'react-navigation-tabbar-collection';
import Icon from 'react-native-vector-icons/AntDesign';

// import Local Files here
import Home from './mainScreen';

const Tab = createBottomTabNavigator();

const DemoScreen = ({ route }) => (
  <View style={styles.screen}>
    <Text>{route.name}</Text>
  </View>
);

const Dashboard = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <ColorfulTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          icon: ({ focused, color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
          color: 'primary',
        }}
      />
      <Tab.Screen
        name="HealthCare"
        component={DemoScreen}
        options={{
          title: 'HealthCare',
          icon: ({ focused, color, size }) => (
            <Icon name="smileo" size={size} color={color} />
          ),
          color: 'info',
        }}
      />
      <Tab.Screen
        name="Consult"
        component={DemoScreen}
        options={{
          title: 'Consult Doctor',
          icon: ({ focused, color, size }) => (
            <Icon name="adduser" size={size} color={color} />
          ),
          color: 'warning',
        }}
      />
      
      <Tab.Screen
        name="Account"
        component={DemoScreen}
        options={{
          title: 'Account',
          icon: ({ focused, color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
          color: 'success',
        }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
