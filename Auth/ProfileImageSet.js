import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ProfileImageSet = ({route , navigation}) => {
  const name = route.params.name;
  const email = route.params.email;
  const password = route.params.password;
  const [ProfileImage, setProfileImage] = useState('');

  const[ImageLoading,setImageLoading] = useState(false)
  const [loading, setLoading] = useState(false);

  const pickImageAndUpload = () => {
    setImageLoading(true);
    launchImageLibrary({quality: 1}, fileobj => {
      const uploadTask = storage()
        .ref()
        .child(`/userprofile/${Date.now()}`)
        .putFile(fileobj.assets[0].uri);
      uploadTask.on(
        'state_changed',
        snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress == 100) setImageLoading(false)
        },
        error => {
          setImageLoading(false)
          alert(error.message);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            setProfileImage(downloadURL);
          });
        },
      );
    });
  };

  const SignUp = async() => {
    setLoading(true);
   try{ const result = await auth().createUserWithEmailAndPassword(
        email,
        password,
      ); 
    firestore().collection('users').doc(result.user.email).set({
        name:name,
        email:result.user.email,
        uid:result.user.uid,
        ProfilePicture:ProfileImage
    })
    navigation.navigate('Home');
   }
   catch (e) {
       alert(e.message);
   }
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
      }}>
      <View
        style={{
          height: 160,
          width: 160,
          borderRadius: 80,
          borderWidth: 1,
          borderColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() =>pickImageAndUpload()} disabled={ProfileImage ?  true : false}>
          <View
            style={{
              height: 150,
              width: 150,
              borderRadius: 75,
              borderWidth: 1,
              borderColor: '#fff',
              borderStyle: 'dashed',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {ImageLoading ? <ActivityIndicator size={40} color="#aaa" /> : !ProfileImage ? (
              <MaterialCommunityIcons
                name="image-plus"
                size={50}
                color="#aaa"
              />
            ) : (
              <Image  source={{uri:ProfileImage}} style={{height:'100%', width:'100%',  borderRadius:100}} resizeMode="cover" />
            )}
          </View>
        </TouchableOpacity>
      </View>

      <Text style={{color: '#fff', marginTop: 20,fontSize:28}}>
        choose your profile photo
      </Text>
      <TouchableOpacity
        onPress={() => {
          setLoading(!loading);
          SignUp();
        }}
        activeOpacity={0.8}
        disabled={!ProfileImage ? true : false}
        style={{
          height: 48,
          width: '90%',
          backgroundColor: !ProfileImage ? '#9ed6fb' : '#1F51FF',
          marginTop: 30,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {loading && <ActivityIndicator size={30} color="#fff" />}

        {!loading && (
          <Text style={{color: '#fff', fontWeight: '600', fontSize: 22}}>
            Register
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProfileImageSet;
