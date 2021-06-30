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
import Slideshow from 'react-native-image-slider-show';
import {styles} from '../themes/styles';
import Snackbar from 'react-native-snackbar';
import Header from '../component/header';

// import TabStack from '../navigator/TabsNavingator';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
      details: '',
      price: '',
      data: '',
      favourite: [],
      cart: [],
      count: 0,
      cc: 1,
      comments: [
        {
          avatar: require('../asserts/riceplate.jpg'),
          name: 'Alloson grayce',
          message: 'jsdhskjd jdsaids asajsa ajakljs adjiadj djajda dkslkdj',
        },
        {
          avatar: require('../asserts/riceplate.jpg'),
          name: 'Alloson grayce',
          message: 'jsdhskjd jdsaids asajsa ajakljs adjiadj djajda dkslkdj',
        },
        {
          avatar: require('../asserts/desh.jpg'),
          name: 'Alloson grayce',
          message: 'jsdhskjd jdsaids asajsa ajakljs adjiadj djajda dkslkdj',
        },
        {
          avatar: require('../asserts/desh.jpg'),
          name: 'Alloson grayce',
          message: 'jsdhskjd jdsaids asajsa ajakljs adjiadj djajda dkslkdj',
        },
      ],
      values: [
        {name: 'someName1', id: 1},
        {name: 'someName2', id: 2},
        {name: 'someName4', id: 3},
        {name: 'someName2', id: 1},
      ],
      dataSource: [
        {
          // title: 'Title 1',
          // caption: 'Caption 1',
          url: require('../asserts/riceplate.jpg'),
        },
        {
          // title: 'Title 2',
          // caption: 'Caption 2',
          url: require('../asserts/desh.jpg'),
        },
        {
          // title: 'Title 3',
          // caption: 'Caption 3',
          url: require('../asserts/sandwich.jpg'),
        },
      ],
    };
  }

  // static navigationOptions = ({navigation}) => {
  //   return {
  //     headerTitle: (props) => <Header title="test221" {...props} />,
  //   };
  // };

  componentDidMount() {
    const {cart} = this.state;
    const data = this.props.route.params;
    this.setState({
      data: data,
      price: data.data.price,
      details: data.data.details,
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1,
        });
      }, 2000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  onFavouriteClick = () => {
    const {data, favourite, values} = this.state;
    var valueArr = favourite.map(function (item) {
      return item.id;
    });
    var duplicate = valueArr.some(function (item, idx) {
      return valueArr.indexOf(item) === idx;
    });
    if (duplicate == true) {
      favourite.pop();
      Snackbar.show({text: 'remove from favourate', duration: 2000});
    } else {
      favourite.push({
        id: data.data.id,
        name: data.data.name,
        details: data.data.details,
        price: data.data.price,
      });
      Snackbar.show({text: 'Added to favourate', duration: 2000});
    }
    console.log('favourite', favourite);
  };

  addToCart = () => {
    const {data, count, cart} = this.state;
    this.setState({count: count + 1});
    if (data) {
      cart.push({
        id: data.data.id,
        name: data.data.name,
        details: data.data.details,
        price: data.data.price,
        quantity: count,
      });
    }
    console.log('count', count);
    console.log('cart', cart);
  };
  increment = () => {
    const {count, cart} = this.state;
    this.setState({count: count + 1});
    console.log('count in increment', count);
    console.log('cart in increment', cart);
  };
  decrement = () => {
    const {count, cart} = this.state;
    this.setState({count: count - 1});
    console.log('count in decrement', count);
    // console.log('cart in decrement', cart);
  };

  render() {
    const {details, price, count} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('../asserts/food.jpg')}
          resizeMethod={'resize'}
          style={styles.image}>
          <View style={styles.child}>
            <View style={{flex: 1}}>
              <Slideshow
                arrowSize={16}
                height={250}
                dataSource={this.state.dataSource}
                position={this.state.position}
                onPositionChanged={(position) => this.setState({position})}
              />
              <View style={[styles.rowDesign]}>
                <Text style={[styles.smallText, {fontSize: 20}]}>
                  {details}
                </Text>
                <Text style={styles.largeText}>{price}</Text>
              </View>
              <View style={styles.rowButtonDesign}>
                <TouchableOpacity
                  onPress={() => this.onFavouriteClick()}
                  style={{backgroundColor: '#EEEEF3', width: '50%'}}>
                  <Text
                    style={[
                      styles.smallText,
                      {color: 'gray', fontSize: 14, padding: 8},
                    ]}>
                    {'Add to favourite'.toUpperCase()}
                  </Text>
                </TouchableOpacity>
                {this.state.count === 0 ? (
                  <TouchableOpacity
                    onPress={() => this.addToCart()}
                    style={{backgroundColor: '#69C730', width: '50%'}}>
                    <Text
                      style={[styles.smallText, {fontSize: 14, padding: 8}]}>
                      {'Add to Cart'.toUpperCase()}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      onPress={() => this.decrement()}
                      style={styles.decrement}>
                      <Text
                        style={[styles.smallText, {fontSize: 20, padding: 2}]}>
                        -
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#62BB2B',
                        width: '22%',
                        height: 48,
                      }}>
                      <Text
                        style={[styles.smallText, {fontSize: 20, padding: 2}]}>
                        {count}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => this.increment()}
                      style={styles.increment}>
                      <Text
                        style={[styles.smallText, {fontSize: 20, padding: 2}]}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <Text
                style={{
                  color: 'gray',
                  padding: 20,
                  fontSize: 17,
                  fontWeight: 'bold',
                  backgroundColor: '#fff',
                }}>
                Comments(324)
              </Text>

              <FlatList
                data={this.state.comments}
                scrollEnabled={true}
                renderItem={({item}) => (
                  <View
                    style={{
                      backgroundColor: '#fff',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginHorizontal: 15,
                      }}>
                      <Image
                        source={item.avatar}
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 50,
                          alignSelf: 'center',
                        }}
                      />
                      <View
                        style={{
                          marginHorizontal: 15,
                          borderColor: 'gray',
                          flexShrink: 1,
                          paddingBottom: '5%',
                          paddingTop: '5%',
                          borderTopWidth: 0,
                          borderRightWidth: 0,
                          borderLeftWidth: 0,
                          borderWidth: 0.5,
                        }}>
                        <Text style={{color: '#69C730', fontSize: 20}}>
                          {item.name}
                        </Text>
                        <Text style={{color: 'gray', paddingTop: 5}}>
                          {item.message}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
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

export default DetailsScreen;
