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
import CheckBox from 'react-native-check-box';
import PhoneInput from 'react-native-phone-input';
import Snackbar from 'react-native-snackbar';
import {styles} from '../themes/styles';
class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartFood: [
        {
          image: require('../asserts/fries-with-leaves-dish.jpg'),
          imagePath: '../asserts/fries-with-leaves-dish.jpg',
          name: 'Izume Set',
          details: 'Sushi',
          price: '$12.40',
        },
        {
          image: require('../asserts/burgerwithfried.jpg'),
          imagePath: '../../asserts/burgerwithfried.jpg',
          name: 'Izume Set',
          details: 'Sushi',
          price: '$12.41',
        },
        {
          image: require('../asserts/bar.jpg'),
          imagePath: '../../asserts/bar.jpg',
          name: 'Izume Set',
          details: 'Sushi',
          price: '$12.42',
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
            <FlatList
              data={this.state.cartFood}
              scrollEnabled={true}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    margin: 10,
                    borderRadius: 5,
                  }}>
                  <Image
                    source={item.image}
                    style={{width: 100, height: 110}}
                  />
                  <View
                    style={{
                      marginHorizontal: 10,
                      marginVertical: 10,
                      width: 250,
                    }}>
                    <Text
                      style={{color: 'gray', fontSize: 17, fontWeight: 'bold'}}>
                      {item.name}
                    </Text>
                    <Text
                      style={{color: 'gray', fontSize: 14, fontWeight: '600'}}>
                      {item.details}
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{color: 'green', alignSelf: 'center'}}>
                        {item.price}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#69C730',
                            width: 45,
                            height: 45,
                            borderRadius: 3,
                            borderWidth: 0.5,
                            borderColor: 'gray',
                          }}>
                          <Text
                            style={[
                              styles.smallText,
                              {fontSize: 20, padding: 2},
                            ]}>
                            -
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#69C730',
                            width: 45,
                            height: 45,
                            borderRadius: 3,
                          }}>
                          <Text
                            style={[
                              styles.smallText,
                              {fontSize: 20, padding: 2},
                            ]}>
                            +
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
export default CartScreen;
