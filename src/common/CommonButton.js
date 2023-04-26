import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

// common button
const CommonButton = ({onPress, title, bgColor, textColor}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, {backgroundColor: bgColor}]}
      onPress={() => {
        onPress();
      }}>
      <Text style={{color: textColor}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '55%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 50,
  },
});

export default CommonButton;
