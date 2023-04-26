import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  icon,
  type,
  keyboardType,
}) => {
  const [text, setText] = useState(value);
  return (
    <View style={styles.mainContainer}>
      <Image source={icon} style={{width: 14, height: 14}} />
      <TextInput
        value={value}
        keyboardType={keyboardType ? keyboardType : 'default'}
        onChangeText={txt => {
          onChangeText(txt);
        }}
        placeholder={placeholder}
        style={{marginLeft: 10}}
        secureTextEntry={type ? true : false}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  mainContainer: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 8,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
