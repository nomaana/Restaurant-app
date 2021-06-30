import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../themes/styles';
import SmallButton from '../component/SmallButton';
// import CustomTextInput from '../component/CustomTextInput';

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('../asserts/food.jpg')}
          resizeMethod={'resize'}
          style={styles.image}>
          {/* <RoundedButton title={'Login'} /> */}
          <View style={styles.child}>
            <Text style={styles.textStyle}>Eat it</Text>
            <Text style={styles.smallText}>
              No matter where you are{'\n'}wheather you are at Home or in the{' '}
              {'\n'} office or in beach-we will find {'\n'} you and we will feed
              you.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginHorizontal: '10%',
                // marginVertical: 20,
              }}>
              {/* <CustomTextInput title={'name'} name={'name'} /> */}
              <SmallButton
                title={'SIGN UP'}
                onPress={() => this.props.navigation.navigate('Signup')}
              />
              <SmallButton
                title={'SIGN IN'}
                buttonStyle={{backgroundColor: '#fff'}}
                textStyle={{color: 'gray'}}
                onPress={() => this.props.navigation.navigate('Signin')}
              />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
