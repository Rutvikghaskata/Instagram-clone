import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const EditProfile = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState([]);

  useEffect(() => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.email)
      .get()
      .then(docSnap => {
        setUser(docSnap.data());
      });
  });

  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: 5,
          marginTop: 10,
          alignItems: 'center',
        }}>
        <StatusBar backgroundColor="black" />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons
            name="ios-close-outline"
            size={37}
            color="#fff"
            onPress={() => navigation.navigate('Home')}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginLeft: 25,
              fontWeight: '700',
            }}>
            Edit Profile
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsLoading(!isLoading);
          }}>
          {isLoading ? (
            <ActivityIndicator size={30} color="#1589FF" />
          ) : (
            <Ionicons name="md-checkmark-sharp" size={30} color="#1589FF" />
          )}
        </TouchableOpacity>
      </View>
      <Image
        source={{uri: user.ProfilePicture}}
        style={{
          marginTop: 20,
          height: 100,
          width: 100,
          borderRadius: 50,
          alignSelf: 'center',
        }}
        resizeMode="cover"
      />
      <Text
        style={{
          color: '#1589FF',
          fontSize: 20,
          marginTop: 7,
          alignSelf: 'center',
        }}>
        Change profile photo
      </Text>
      <View style={{paddingHorizontal: 10}}>
        <View>
          <Text
            style={{
              color: '#aaa',
              fontSize: 13,
              marginTop: 7,
            }}>
            Name
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 17,
              marginTop: 7,
            }}>
            {user.name}
          </Text>
          <View style={{width:'100%',backgroundColor:'#f1f1f1',height:1,marginTop:5}}></View>
        </View>
        <View>
          <Text
            style={{
              color: '#aaa',
              fontSize: 13,
              marginTop: 17,
            }}>
            Username
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 17,
              marginTop: 7,
            }}>
            {user.name}
          </Text>
          <View style={{width:'100%',backgroundColor:'#f1f1f1',height:1,marginTop:5}}></View>
        </View>
        <View>
          <Text
            style={{
              color: '#aaa',
              fontSize: 17,
              marginTop: 23,
            }}>
            Website
          </Text>
          <View style={{width:'100%',backgroundColor:'#f1f1f1',height:1,marginTop:18}}></View>
        </View>
        <View>
          <Text
            style={{
              color: '#aaa',
              fontSize: 13,
              marginTop: 17,
            }}>
            Bio
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 17,
              marginTop: 7,
            }}>
            ❤️ I Love My Family ❤️
          </Text>
          <View style={{width:'100%',backgroundColor:'#f1f1f1',height:1,marginTop:5}}></View>
        </View>
      </View>
      <View style={{borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#999999',marginTop:30,paddingVertical:13}}>
      <Text
            style={{
              color: '#1589FF',
              fontSize: 17,
              marginLeft:10
            }}>
             Switch to Professional Account 
          </Text>
      </View>
      <View style={{borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#999999',marginTop:20,paddingVertical:13}}>
      <Text
            style={{
              color: '#1589FF',
              fontSize: 17,
              marginLeft:10
            }}>
             Personal information settings 
          </Text>
      </View>
    </View>
  );
};

export default EditProfile;
