// import React, {Component} from 'react';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import HomeScreen from '../screens/HomeScreen';
// import SignupScreen from '../screens/SignupScreen';

// const Tab = createMaterialTopTabNavigator();
// const TabStack = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Signup" component={SignupScreen} />
//     </Tab.Navigator>
//   );
// };
// export default TabStack;

import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import {styles} from '../themes/styles';

function HomeScreen() {
  return (
    <View style={{flex: 1, backgroundColor: '#EEEEF3'}}>
      <View
        style={{
          marginHorizontal: 15,
          margin: 20,
          backgroundColor: '#fff',
          padding: 10,
        }}>
        <Text style={[styles.textColor, {color: '#69C730'}]}>Home!</Text>
        <Text style={[styles.textColor, {color: '#858585'}]}>Home!</Text>
      </View>
      <View
        style={{
          marginHorizontal: 15,
          // marginVertical: 6,
          backgroundColor: '#fff',
          padding: 10,
        }}>
        <Text style={[styles.textColor, {color: '#69C730'}]}>Home!</Text>
        <Text style={[styles.textColor, {color: '#858585'}]}>Home!</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, {width: '100%', borderRadius: 0, top: '40%'}]}>
        <Text style={[styles.smallText]}>{'Add Address'.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, backgroundColor: '#EEEEF3'}}>
      <View
        style={{
          marginHorizontal: 15,
          margin: 20,
          backgroundColor: '#fff',
          padding: 10,
        }}>
        <Text style={[styles.textColor, {color: '#69C730'}]}>Card1</Text>
        <Text style={[styles.textColor, {color: '#858585'}]}>
          xxxx xxxx xxxx 5467
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.button, {width: '100%', borderRadius: 0, top: '58%'}]}>
        <Text style={[styles.smallText]}>{'Add Card'.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function test() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        indicatorStyle: {backgroundColor: '#69C730', padding: 1.5},
        activeTintColor: '#454545',
        inactiveTintColor: '#A9A9AC',
        labelStyle: {fontSize: 15},
        // tabStyle: {},
        style: {backgroundColor: '#fff'},
      }}>
      <Tab.Screen name="My Addresses" component={HomeScreen} />
      <Tab.Screen name="My Cards" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
