import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const login = () => {
    setModalVisible(true);
    if (email == '') {
      setModalVisible(false);
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password == '') {
        setModalVisible(false);
        setBadPassword(true);
      } else {
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 2000);
      }
    }
  };
 
  // using AsyncStorage to store Email and password 
  const getData = async () => {
    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPass = await AsyncStorage.getItem('PASSWORD');
    console.log(mEmail, mPass);
    if (email === mEmail && mPass === password) {
      navigation.navigate('Home');
    } else {
      alert('username and password is incorrect');
    }
  };

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../asset/img/newlogo.png')}
        style={styles.applogo}
      />
      <Text style={styles.loginTxt}>Login</Text>
      {/* Login text field */}
      <CustomTextInput
        placeholder={'Enter Email Id'}
        icon={require('../asset/img/user.png')}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />
      {/* error handling */}
      {badEmail === true && (
        <Text style={styles.errorStyle}>Please Enter Email Id</Text>
      )}
      {/* Login password field */}
      <CustomTextInput
        type={'passwpord'}
        placeholder={'Enter Password'}
        icon={require('../asset/img/key.png')}
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}
      />
      {/* error handling */}
      {badPassword === true && (
        <Text style={styles.errorStyle}>Please Enter Password</Text>
      )}
      {/* login Button */}
      <CommonButton
        title={'Login'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {
          login();
        }}
      />
      {/* button to route on create acccount page  */}
      <Text
        style={{
          fontSize: 12,
          fontWeight: '300',
          alignSelf: 'center',
          marginTop: 20,
          textDecorationLine: 'underline',
        }}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        Create New Account?
      </Text>
      {/* <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}
    </View>
  );
};

// StyleSheet for login page
const styles = StyleSheet.create({
  loginTxt: {
    marginVertical: 25,
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  applogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 100,
    borderRadius: 100,
  },
  errorStyle: {marginLeft: 40, color: 'red', fontSize: 10, marginVertical: 3},
});

export default Login;
