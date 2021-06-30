import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  ImageBackground,
  View,
  TouchableOpacity,
  Animated,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
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
import TabScreen from '../navigator/TabsNavingator';

import {styles} from '../themes/styles';
class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartFood: [
        {
          name: 'Izume Set',
          details: 'Sushi',
          price: '$12.40',
        },
        {
          name: 'Izume Set',
          details: 'Sushi',
          price: '$12.41',
        },
      ],
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('../asserts/riceplate.jpg')}
          resizeMethod={'resize'}
          style={styles.image}>
          <View style={styles.child}>
            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: '10%',
                  // justifyContent: 'center',
                }}>
                <Avatar.Image
                  source={require('../asserts/profile.png')}
                  size={100}
                />
                <Title
                  style={[styles.smallText, {fontSize: 20, marginLeft: 10}]}>
                  Jhon Dio
                </Title>
              </View>
              <View style={[styles.row, {backgroundColor: '#EEEEF3'}]}>
                <View>
                  <Text
                    style={[
                      styles.smallText,
                      {color: '#454545', fontSize: 19},
                    ]}>
                    Push-notifications
                  </Text>
                </View>
                <View style={{padding: 10}}>
                  <Switch />
                </View>
              </View>
              <TabScreen />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
export default CartScreen;
