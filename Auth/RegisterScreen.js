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
import Ionicons from 'react-native-vector-icons/Ionicons';


const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

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
              name.length > 5 ? 'white' : name.length === 0 ? 'white' : 'red',
            borderRadius: 7,
          }}>
          <TextInput
            value={name}
            placeholder="Enter Your Name"
            placeholderTextColor="#fff"
            color="#fff"
            onChangeText={text => setName(text)}
            style={{marginLeft: 10}}
          />
        </View>
        <View
          style={{
            height: 50,
            width: '90%',
            marginTop: 20,
            borderWidth: 1,
            borderColor:
              email.length > 5 ? 'white' : email.length === 0 ? 'white' : 'red',
            borderRadius: 7,
          }}>
          <TextInput
            value={email}
            placeholder="Enter Your Phone number or Email address"
            placeholderTextColor="#fff"
            color="#fff"
            onChangeText={text => setEmail(text)}
            style={{marginLeft: 10}}
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
          onPress={() =>{setLoading(true);navigation.navigate('SetProfile',{name:name,email:email,password:password})}}
          activeOpacity={0.8}
          disabled={
            email.length < 6
              ? true
              : password.length < 6
              ? true
              : name.length < 6
              ? true
              : false
          }
          style={{
            height: 48,
            width: '90%',
            backgroundColor:
              email.length < 6
                ? '#9ed6fb'
                : password.length < 6
                ? '#9ed6fb'
                : name.length < 6
                ? '#9ed6fb'
                : '#1F51FF',
            marginTop: 30,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {loading && <ActivityIndicator size={30} color="#fff"/>}

          {!loading && (
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 22}}>
              Next
            </Text>
          )}
          {!loading && (
            <Ionicons
              name="arrow-forward"
              size={25}
              color="#fff"
              style={{marginLeft: 10, marginTop: 2}}
            />
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
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#ccc'}}>Already Have Account ? </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RegisterScreen;
