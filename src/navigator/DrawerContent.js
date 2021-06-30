import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
  ToggleButton,
} from 'react-native-paper';
import {styles} from '../themes/styles';
import IconHome from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntiDesign from 'react-native-vector-icons/AntDesign';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={styles.image}
        resizeMethod={'resize'}
        source={require('../asserts/cake.jpg')}>
        <View style={styles.child}>
          <DrawerContentScrollView {...props}>
            <View style={drawerStyle.drawerContent}>
              <View style={drawerStyle.userInfoSection}>
                <View
                  style={{
                    marginTop: '10%',
                  }}>
                  <View style={{marginLeft: 15}}>
                    <Avatar.Image
                      source={require('../asserts/profile.png')}
                      size={70}
                    />
                  </View>
                  <View style={{marginLeft: 15}}>
                    <Title style={drawerStyle.title}>Pradic Depthas</Title>
                    <Caption style={drawerStyle.caption}>Edit Profile</Caption>
                  </View>
                </View>
              </View>

              <Drawer.Section style={drawerStyle.drawerSection}>
                {/* Home */}
                <DrawerItem
                  icon={({color, size}) => (
                    <IconHome name="home-outline" color="#fff" size={size} />
                  )}
                  label="Home"
                  labelStyle={drawerStyle.textStyle}
                  onPress={() => props.navigation.navigate('Menu')}
                />

                {/*Offer  */}
                <DrawerItem
                  icon={({color, size}) => (
                    <IconAntiDesign name="tags" color="#fff" size={size} />
                  )}
                  label="Offer"
                  labelStyle={drawerStyle.textStyle}
                  onPress={() => props.navigation.navigate('ForgotPassword')}
                />

                {/*  My Cart*/}
                <DrawerItem
                  icon={({color, size}) => (
                    <IconAntiDesign
                      name="shoppingcart"
                      color="#fff"
                      size={size}
                    />
                  )}
                  label="My Cart"
                  labelStyle={drawerStyle.textStyle}
                  onPress={() => {
                    props.navigation.navigate('Cart');
                  }}
                />
                {/* Last Order */}
                <DrawerItem
                  icon={({color, size}) => (
                    <IconIonicons name="md-time" color="#fff" size={size} />
                  )}
                  label="Last Order"
                  labelStyle={drawerStyle.textStyle}
                  onPress={() => {}}
                />
                {/* Favourite  */}
                <DrawerItem
                  icon={({color, size}) => (
                    <IconHome
                      name="bookmark-outline"
                      color="#fff"
                      size={size}
                    />
                  )}
                  label="Favorite"
                  labelStyle={drawerStyle.textStyle}
                  onPress={() => {
                    props.navigation.navigate('Favorite');
                  }}
                />
                {/* Setting  */}
                <DrawerItem
                  icon={({color, size}) => (
                    <IconSimpleLineIcons
                      name="settings"
                      color="#fff"
                      size={size}
                    />
                  )}
                  label="Setting"
                  labelStyle={drawerStyle.textStyle}
                  onPress={() => {
                    props.navigation.navigate('Setting');
                  }}
                />
                {/* Support */}
                <DrawerItem
                  icon={({color, size}) => (
                    <IconAntiDesign name="message1" color="#fff" size={size} />
                  )}
                  label="Support"
                  labelStyle={drawerStyle.textStyle}
                  onPress={() => {}}
                />
              </Drawer.Section>
              {/* <Drawer.Section title="Preferences">
                <TouchableRipple onPress={() => toggleTheme()}>
                  <View style={drawerStyle.preference}>
                    <Text style={drawerStyle.textStyle}>Dark Theme</Text>
                    <View pointerEvents="none">
                      <Switch value={isDarkTheme} />
                    </View>
                  </View>
                </TouchableRipple>
              </Drawer.Section> */}
            </View>
          </DrawerContentScrollView>

          <Drawer.Section
            style={{
              marginBottom: 12,
              borderTopWidth: 1,
              borderTopColor: '#f4f4f4',
            }}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="exit-to-app" color="#fff" size={size} />
              )}
              label="Sign Out"
              labelStyle={drawerStyle.textStyle}
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </ImageBackground>
    </View>
  );
}
const drawerStyle = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  textStyle: {
    color: '#fff',
    fontSize: 17,
  },
  userInfoSection: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 3,
    // fontWeight: 'bold',
    color: '#fff',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: '#62BB2B',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
