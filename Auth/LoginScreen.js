import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const userLogin = async () => {
    setLoading(true);
    if (!email || !password) {
      alert('please add all the field');
      return;
    }
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (err) {
      alert(err.message);
    }
  };
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
          style={{height: 80, width: 220}}
          resizeMode="contain"
        />
        <View
          style={{
            height: 50,
            width: '90%',
            marginTop: 30,
            borderWidth: 1,
            borderColor:
              email.length > 5 ? 'white' : email.length === 0 ? 'white' : 'red',
            borderRadius: 7,
          }}>
          <TextInput
            value={email}
            placeholder="Phone number , username or email"
            placeholderTextColor="#fff"
            color="#fff"
            onChangeText={text => setEmail(text)}
            style={{marginLeft: 10}}
            onFocus={() => setTyping(true)}
            onBlur={() => setTyping(false)}
          />
        </View>
        <View
          style={{
            height: 50,
            width: '90%',
            marginTop: 20,
            borderWidth: 1,
            borderColor:
              password.length > 5
                ? 'white'
                : password.length === 0
                ? 'white'
                : 'red',
            borderRadius: 7,
          }}>
          <TextInput
            value={password}
            placeholder="Password"
            placeholderTextColor="#fff"
            color="#fff"
            onChangeText={text => setPassword(text)}
            style={{marginLeft: 10}}
            // onFocus={() => setTyping(true)}
            // onBlur={() => setTyping(false)}
          />
        </View>

        <Text
          style={{
            color: '#9ed6fb',
            alignSelf: 'flex-end',
            marginRight: '5%',
            marginTop: 10,
          }}>
          forget Password?
        </Text>

        <TouchableOpacity
          onPress={() => userLogin()}
          activeOpacity={0.8}
          disabled={
            email.length < 6 ? true : password.length < 6 ? true : false
          }
          style={{
            height: 48,
            width: '90%',
            backgroundColor:
              email.length < 6
                ? '#9ed6fb'
                : password.length < 6
                ? '#9ed6fb'
                : 'blue',
            marginTop: 30,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {loading && <ActivityIndicator color={'#fff'} size={30} />}
          {!loading && (
            <Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>
              Login
            </Text>
          )}
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', width: '90%', alignItems: 'center'}}>
          <View
            style={{
              height: 1,
              width: '42%',
              backgroundColor: '#aaa',
              marginTop: 40,
            }}></View>
          <View style={{width: '16%', marginTop: 40, alignItems: 'center'}}>
            <Text style={{color: '#aaa'}}>OR</Text>
          </View>

          <View
            style={{
              height: 1,
              width: '42%',
              backgroundColor: '#aaa',
              marginTop: 40,
            }}></View>
        </View>

        <TouchableOpacity
          style={{marginTop: 30}}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Register')}>
          <Text style={{color: '#ccc'}}>Don't Have Account ? </Text>
        </TouchableOpacity>
        
      </View>
    </>
  );
};

export default LoginScreen;
