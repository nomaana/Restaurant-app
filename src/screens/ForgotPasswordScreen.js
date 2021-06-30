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
} from 'react-native';
import CheckBox from 'react-native-check-box';
import PhoneInput from 'react-native-phone-input';
import Snackbar from 'react-native-snackbar';
import {styles} from '../themes/styles';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNo: '',
      password: '',
      isFieldActicve: false,
      isVisible: false,
      isChecked: false,
      countryCode: '+91',
      msg: '',
      emailMsg: '',
      isValidNumber: '',
    };
  }

  handlePhoneNo = (text) => {
    this.setState({phoneNo: text});
  };
  handlePassword = (text) => {
    this.setState({password: text});
  };

  Validation = () => {
    const {
      name,
      phoneNo,
      isValidNumber,
      password,
      email,
      isChecked,
    } = this.state;
    console.log(isValidNumber, 'test');
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    switch (true) {
      case name == '':
        Snackbar.show({text: 'Enter the Name', duration: 2000});
        break;
      case reg.test(email) === false:
        Snackbar.show({text: 'Enter The Email ', duration: 2000});
        break;
      case password == '':
        Snackbar.show({text: 'Enter the password', duration: 2000});
        break;
      case phoneNo == '' || isValidNumber === false:
        Snackbar.show({text: 'Enter the phoneNo', duration: 2000});
        break;
      case isChecked === false:
        Snackbar.show({text: 'Agree the term and Condutions', duration: 2000});
        break;
    }
  };

  emailValidate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      const emailMsg = 'Email is Not Correct';
      this.setState({email: text, emailMsg});
      return false;
    } else {
      this.setState({email: text, emailMsg});
      const emailMsg = 'Email is Correct';
    }
  };

  onChangeHandle = (field, value, isValidNumber) => {
    if (!isValidNumber) {
      const msg = 'Invalid Mobile Number ';
      this.setState({msg, isValidNumber: false});
    } else {
      const msg = '';
      this.setState({msg, isValidNumber: true, phoneNo: value});
    }
  };
  onSelectCountry = (countryCode) => {
    console.log('code', countryCode);
    countryCode = '+' + countryCode;
    this.setState({countryCode});
  };
  onToggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
    if (this.state.isChecked === false) {
      console.log('isChecked', this.state.isChecked);
    }
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('../asserts/food.jpg')}
          resizeMethod={'resize'}
          style={styles.image}>
          <View style={styles.child}>
            <View style={{margin: '11%'}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.largeText}>
                  {'forgot password'.toUpperCase()}
                  {'\n'}{' '}
                  <Text style={styles.smallText}>
                    we send you password in email
                  </Text>
                </Text>
              </View>
              <Text style={styles.inputText}>Password</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Enter Password "
                secureTextEntry={true}
                value={this.state.password}
                placeholderTextColor="#fff"
                autoCapitalize="none"
                onChangeText={(text) => this.handlePassword(text)}
              />
              <TouchableOpacity
                onPress={() => this.Validation()}
                style={[
                  styles.button,
                  {
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: '15%',
                  },
                ]}>
                <Text style={styles.smallText}>{'send'.toUpperCase()}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
export default HomeScreen;
