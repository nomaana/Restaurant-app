import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {styles} from '../themes/styles';
import PhoneInput from 'react-native-phone-input';

const CustomerTextInput = ({
  title,
  value,
  placeholder,
  error,
  type,
  onChangePhoneNumber,
  ref,
}) => {
  if (type === 'normal') {
    return (
      <View style={[SignUPStyles.textFieldGroup]}>
        <Text style={styles.inputText}>{title}</Text>
        <TextInput
          value={value}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          placeholderTextColor="#fff"
          autoCapitalize="none"
          // onChangeText={this.handleName}
        />
        <View style={{flexWrap: 'wrap-reverse'}}>
          <Text style={{color: '#fff'}}>{error}</Text>
        </View>
      </View>
    );
  } else if (type === 'phone') {
    return (
      <View style={[SignUPStyles.textFieldGroup, {bottom: '10%'}]}>
        <Text style={styles.inputText}>{title}</Text>
        <PhoneInput
          // ref={(ref) => ref}
          textStyle={[styles.input]}
          onSelectCountry={(value) =>
            this.onSelectCountry(this.phone.getCountryCode())
          }
          pickerBackgroundColor={'Lightgreen'}
          onChangePhoneNumber={(text) => onChangePhoneNumber}
          value={value}
        />
        <View style={{flexWrap: 'wrap-reverse'}}>
          <Text style={{color: '#fff'}}>{error}</Text>
        </View>
      </View>
    );
  }
};
const SignUPStyles = StyleSheet.create({
  textFieldGroup: {
    bottom: '1%',
    //  marginTop: '2%',
  },
});

export default CustomerTextInput;
