import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {styles} from '../themes/styles';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [
        {
          id: 1,
          image: require('../asserts/fries-with-leaves-dish.jpg'),
          imagePath: '../asserts/fries-with-leaves-dish.jpg',
          name: 'sushi',
          details: 'Rebeye',
          price: '$12.40',
        },
        {
          id: 2,
          image: require('../asserts/burgerwithfried.jpg'),
          imagePath: '../../asserts/burgerwithfried.jpg',
          name: 'sushi',
          details: 'Burgerwithfried',
          price: '$12.40',
        },
        {
          id: 3,
          image: require('../asserts/bar.jpg'),
          imagePath: '../../asserts/bar.jpg',
          name: 'sushi',
          details: 'Soft Drink',
          price: '$12.40',
        },
        {
          id: 4,
          image: require('../asserts/desh.jpg'),
          imagePath: '../../asserts/desh.jpg',
          name: 'sushi',
          details: 'Non Veg Meal',
          price: '$12.40',
        },
        {
          id: 5,
          image: require('../asserts/desh.jpg'),
          imagePath: '../../asserts/desh.jpg',
          name: 'sushi',
          details: 'Non Veg Meal',
          price: '$12.40',
        },
        {
          id: 6,
          image: require('../asserts/riceplate.jpg'),
          imagePath: '../../asserts/riceplate.jpg',
          name: 'sushi',
          details: 'Riceplate',
          price: '$12.40',
        },
        {
          id: 7,
          image: require('../asserts/sandwich.jpg'),
          imagePath: '../../asserts/sandwich.jpg',
          name: 'sushi',
          details: 'Sandwich',
          price: '$12.40',
        },
      ],
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('../asserts/food.jpg')}
          resizeMethod={'resize'}
          style={styles.image}>
          <View style={styles.child}>
            <FlatList
              data={this.state.food}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={() =>
                    this.props.navigation.navigate('Detail', {
                      data: item,
                    })
                  }>
                  <Image
                    source={item.image}
                    style={{width: '100%', height: 250}}
                  />
                  <View style={styles.rowDesign}>
                    <Text style={[styles.smallText, {fontSize: 20}]}>
                      {item.details}
                    </Text>
                    <Text style={styles.largeText}>{item.price}</Text>
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
const Customestyles = StyleSheet.create({
  item: {
    color: '#fff',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default HomeScreen;
