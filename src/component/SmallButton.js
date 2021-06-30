import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {styles} from '../themes/styles';

const SmallButton = ({title, onPress, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.smallText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({});
export default SmallButton;
