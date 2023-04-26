import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
let isValid = true;
const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [mobile, setMobile] = useState('');
  const [badMobile, setBadMobile] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const signupp = () => {
    setButtonDisabled(true);

    if (name == '') {
      setBadName(true);
      setButtonDisabled(false);
    } else {
      setBadName(false);
      if (email == '') {
        setBadEmail(true);
        setButtonDisabled(false);
      } else {
        setBadEmail(false);
        if (mobile == '') {
          setBadMobile(true);
          setButtonDisabled(false);
        } else if (mobile.length < 10) {
          setBadMobile(true);
          setButtonDisabled(false);
        } else {
          setBadMobile(false);
          if (password == '') {
            setBadPassword(true);
            setButtonDisabled(false);
          } else {
            setBadPassword(false);
            if (confirmPassword == '') {
              setBadConfirmPassword(true);
              setButtonDisabled(false);
            } else {
              setBadConfirmPassword(false);
              if (password !== confirmPassword) {
                setBadConfirmPassword(true);
                setButtonDisabled(false);
              } else {
                setBadConfirmPassword(false);
                saveData();
              }
            }
          }
        }
      }
    }
  };
  const saveData = async () => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('MOBILE', mobile);
    await AsyncStorage.setItem('PASSWORD', password);
    navigation.goBack();
  };
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <Image
          source={require('../asset/img/newlogo.png')}
          style={styles.applogo}
        />
        <Text style={styles.signupText}>Create New Account</Text>
        {/* user name  */}
        <CustomTextInput
          placeholder={'Enter Name'}
          value={name}
          onChangeText={txt => {
            setName(txt);
          }}
          icon={require('../asset/img/user.png')}
        />
        {badName === true && (
          <Text style={styles.errorStyle}>Please Enter Namer</Text>
        )}
        {/* users email id  */}
        <CustomTextInput
          placeholder={'Enter Email Id'}
          value={email}
          onChangeText={txt => {
            setEmail(txt);
          }}
          icon={require('../asset/img/emailIcon.png')}
        />
        {badEmail === true && (
          <Text style={styles.errorStyle}>Please Enter Email Id</Text>
        )}
        {/* users mobile number  */}
        <CustomTextInput
          placeholder={'Enter Mobile'}
          value={mobile}
          keyboardType={'number-pad'}
          onChangeText={txt => {
            setMobile(txt);
          }}
          icon={require('../asset/img/mobile.png')}
        />
        {badMobile === true && (
          <Text style={styles.errorStyle}>Please Valid Mobile</Text>
        )}
        {/* users login passcode  */}
        <CustomTextInput
          value={password}
          onChangeText={txt => {
            setPassword(txt);
          }}
          placeholder={'Enter Password'}
          icon={require('../asset/img/key.png')}
        />
        {badPassword === true && (
          <Text style={styles.errorStyle}>Please Enter Password</Text>
        )}
        {/* users login confirm passcode  */}
        <CustomTextInput
          value={confirmPassword}
          onChangeText={txt => {
            setConfirmPassword(txt);
          }}
          placeholder={'Enter Confirm  Password'}
          icon={require('../asset/img/key.png')}
        />
        {badConfirmPassword === true && (
          <Text style={styles.errorStyle}>Please Enter Correct Password</Text>
        )}
        {/* signup button */}
        <CommonButton
          title={'Sign Up'}
          bgColor={buttonDisabled ? '#8e8e8e' : '#000'}
          textColor={'#fff'}
          onPress={() => {
            signupp();
          }}
          disabled={buttonDisabled}
        />
        {/* secondaryButton if you have an account Already */}
        <Text
          style={styles.secondaryButton}
          onPress={() => {
            navigation.goBack();
          }}>
          Already have account?
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signupText: {
    marginVertical: 25,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  applogo: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 30,
  },
  errorStyle: {marginLeft: 40, color: 'red', fontSize: 10, marginBottom: 8},
  secondaryButton: {
    fontSize: 12,
    fontWeight: '300',
    alignSelf: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
export default Signup;
