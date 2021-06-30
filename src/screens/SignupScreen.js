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
  KeyboardAvoidingView,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import Snackbar from 'react-native-snackbar';
import CustomTextInput from '../component/CustomTextInput';

import {styles} from '../themes/styles';
class HomeScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      phoneNo: '',
      password: '',
      email: '',
      isFieldActicve: false,
      isVisible: false,
      isChecked: false,
      countryCode: '+91',
      msg: '',
      emailMsg: '',
      isValidNumber: '',
    };
  }

  handleName = (text) => {
    this.setState({name: text});
  };
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
              <View style={{top: '7%'}}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../asserts/photo.png')}
                    style={{width: 65, height: 65}}
                  />
                </TouchableOpacity>
                <CustomTextInput
                  type={'normal'}
                  title={'Name'}
                  placeholder={'Enter Name'}
                  value={this.state.name}
                />
                <CustomTextInput
                  type={'normal'}
                  title={'Email Id'}
                  placeholder={'Enter Email ID'}
                  value={this.state.email}
                  error={this.state.emailMsg}
                />
                <CustomTextInput
                  type={'normal'}
                  title={'Password'}
                  placeholder={'Enter Password'}
                  value={this.state.password}
                  error={this.state.emailMsg}
                />

                <CustomTextInput
                  // ref={(this.phone = ref)}
                  type={'phone'}
                  title={'Phone No'}
                  // onChangePhoneNumber={this.onChangeHandle(
                  // 'mobileno',
                  // this.phone.getValue(  ),
                  // this.phone.isValidNumber(),
                  // )}
                  placeholder={'Enter Password'}
                  value={this.state.countryCode}
                  error={this.state.emailMsg}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    bottom: '15%',
                  }}>
                  <CheckBox
                    style={{top: 10}}
                    checkBoxColor="lightgreen"
                    onClick={() => this.onToggleChange()}
                    isChecked={this.state.isChecked}
                    // rightText={'CheckBox'}
                  />
                  <Text style={[styles.smallText, {right: 5}]}>
                    I agree with{' '}
                    <Text
                      style={{
                        textDecorationLine: 'underline',
                        color: 'lightgreen',
                      }}>
                      Terms&Conductions
                    </Text>
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => this.Validation()}
                style={[
                  styles.button,
                  {
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: '15%',
                  },
                ]}>
                <Text style={styles.smallText}>{'Sign up'.toUpperCase()}</Text>
              </TouchableOpacity>
              <Text style={[styles.smallText, {right: 16, marginTop: '10%'}]}>
                I have{' '}
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    color: 'lightgreen',
                  }}>
                  an account
                </Text>
              </Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const SignUPStyles = StyleSheet.create({
  textFieldGroup: {
    bottom: '1%',
    //  marginTop: '2%',
  },
});

export default HomeScreen;
