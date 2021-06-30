import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '../navigator/DrawerContent';
import {Text, TouchableOpacity, Dimensions} from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../component/header';
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import MenuScreen from '../screens/MenuScreen';
import DetailsScreen from '../screens/DetailsScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AppStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <IconEntypo.Button
              name="menu"
              size={25}
              backgroundColor="rgba(0,0,0,0.1)"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: 'rgba(0,0,0,0.9)',
          },
          headerTitleStyle: {
            alignSelf: 'center',
            paddingRight: 55,
          },
        }}
        name="Setting"
        component={SettingsScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <IconEntypo.Button
              name="menu"
              size={25}
              backgroundColor="rgba(0,0,0,0.1)"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: 'rgba(0,0,0,0.9)',
          },
          headerTitleStyle: {
            alignSelf: 'center',
            paddingRight: 55,
          },
        }}
        name="Favorite"
        component={FavoriteScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <IconEntypo.Button
              name="menu"
              size={25}
              backgroundColor="rgba(0,0,0,0.1)"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: 'rgba(0,0,0,0.9)',
          },
          headerTitleStyle: {
            alignSelf: 'center',
            paddingRight: 55,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <Text style={{color: '#FFFFFF', padding: 15, fontSize: 20}}>
                Edit{' '}
              </Text>
            </TouchableOpacity>
          ),
        }}
        name="Cart"
        component={CartScreen}
      />

      <Stack.Screen
        options={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: 'rgba(0,0,0,0.9)',
          },
          headerTitleStyle: {
            alignSelf: 'center',
          },
          headerRight: () => (
            <IconAntDesign.Button
              name="shoppingcart"
              size={25}
              backgroundColor="rgba(0,0,0,0.1)"
              onPress={() => navigation.navigate('Cart')}
            />
          ),
        }}
        name="Detail"
        component={DetailsScreen}
      />

      <Stack.Screen
        options={{
          title: 'Menu',
          headerStyle: {
            backgroundColor: 'rgba(0,0,0,0.9)',
          },
          headerTintColor: '#fff',
          headerLeft: () => (
            <IconEntypo.Button
              name="menu"
              size={25}
              backgroundColor="rgba(0,0,0,0.1)"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <IconAntDesign.Button
              name="search1"
              size={25}
              backgroundColor="rgba(0,0,0,0.1)"
              // onPress={() => navigation.openDrawer()}
            />
          ),
          // headerTransparent: true,
        }}
        name="Menu"
        component={MenuScreen}
      />

      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          title: 'Sign up'.toUpperCase(),
          headerStyle: {
            backgroundColor: '#6bde4b',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            // fontWeight: 'bold',
            alignSelf: 'center',
            marginRight: '25%',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = (props) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        width: Dimensions.get('screen').width / 1.4,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name={'App'} component={AppStack} />
      {/* <Drawer.Screen name="Menu" component={MenuScreen} /> */}
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
