import {View, StatusBar, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';


const SplashScreen = ({navigation}) => {

  const [user, setUser] = useState('');

  useEffect(() => {
    const unregister = auth().onAuthStateChanged(userExist => {
      setUser(userExist);
    });
    return () => {
      unregister();
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      {
        user ? navigation.navigate('Home') : navigation.navigate('Login');
      }
    }, 5000);
  });
  return (
    <>
      <StatusBar hidden />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000000',
        }}>
        <Image
          source={require('../images/insta.jpg')}
          resizeMode={'contain'}
          style={{height: 200, width: 200}}
        />
      </View>
    </>
  );
};

export default SplashScreen;
