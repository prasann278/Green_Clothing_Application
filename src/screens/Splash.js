import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Login from './Login';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Login);
    }, 3000);
    return () => {
    //   second;
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Image
        source={require('../asset/img/newlogo.png')}
        style={{width: 200, height: 200, borderRadius:100}}
      />
    </View>
  );
};

export default Splash;
