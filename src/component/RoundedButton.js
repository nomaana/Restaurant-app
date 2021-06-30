import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
// import {styles} from '../themes/styles';

const RoundedButton = ({title, onPress, buttonstyle, textStyle}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonstyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    // width: '70%',
    height: '5%',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: 'white',
  },
});

export default RoundedButton;
