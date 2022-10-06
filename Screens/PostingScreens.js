import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const tags = [
  {
    id: 1,
    Label: 'Surat, Gujarat',
  },
  {
    id: 2,
    Label: 'The City of Sun Surat',
  },
  {
    id: 3,
    Label: 'Zindgi mai Kuchh to Kami hai',
  },
];

const PostingScreen = ({navigation}) => {
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

  const [PostImage, setPostImage] = useState('');
  const [ImageLoading, setImageLoading] = useState(false);

  const currentUser = user.name;
  const ProfilePicture = user.ProfilePicture;
  const owner_uid = user.uid;
  const owner_email = user.email;
  const [caption, setCaption] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const UploadPost = () => {
    setIsLoading(true);
    firestore()
      .collection('users')
      .doc(user.email)
      .collection('posts')
      .add({
        imageUrl: PostImage,
        user: currentUser,
        ProfilePicture: ProfilePicture,
        owner_email: owner_email,
        owner_uid: owner_uid,
        caption: caption,
        createdAt: firestore.FieldValue.serverTimestamp(),
        likes: 0,
        likes_by_users: [],
        comments: [],
      })
      .then(() => {
        navigation.navigate('Home');
      });
  };

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
          if (progress == 100) setImageLoading(false);
        },
        error => {
          setImageLoading(false);
          alert(error.message);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            setPostImage(downloadURL);
          });
        },
      );
    });
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        paddingVertical: 8,  
        // paddingHorizontal: 12,
        backgroundColor: 'black',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 10,
          marginLeft: 8,
        }}>
        <StatusBar backgroundColor="black" />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons
            name="arrow-back"
            size={27}
            color="#fff"
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={{color: 'white', fontSize: 20, marginLeft: 28}}>
            New Post
          </Text>
        </View>
        <TouchableOpacity onPress={UploadPost}>
          {isLoading ? (
            <ActivityIndicator size={30} color="#3A9BDD" />
          ) : (
            <Ionicons name="md-checkmark-sharp" size={30} color="#3A9BDD" />
          )}
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          backgroundColor: 'black',
          marginTop: 10,
          marginRight: 8,
          marginLeft: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: user.ProfilePicture,
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 20,
              }}
            />
          </View>
          <TextInput
            placeholder="Write a caption"
            placeholderTextColor={'gray'}
            style={{marginLeft: 10, color: 'white'}}
            onChangeText={Text => {
              setCaption(Text);
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => pickImageAndUpload()}
          disabled={PostImage ? true : false}>
          <View
            style={{
              height: 60,
              width: 60,
              borderWidth: PostImage ? 0 : 1,
              borderColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderStyle: 'dashed',
              borderRadius: 5,
            }}>
            {ImageLoading ? (
              <ActivityIndicator size={30} color="#aaa" />
            ) : !PostImage ? (
              <MaterialCommunityIcons
                name="image-plus"
                size={30}
                color="#aaa"
              />
            ) : (
              <Image
                source={{uri: PostImage}}
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 100,
                  borderRadius: 5,
                }}
                resizeMode="cover"
              />
            )}
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
          borderColor: '#333333',
          width: '100%',
          paddingVertical: 12,
        }}>
        <Text style={{color: 'white', fontSize: 16, marginLeft: 10}}>
          Tag People
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderColor: '#333333',
          width: '100%',
          paddingVertical: 12,
        }}>
        <Text style={{color: 'white', fontSize: 16, marginLeft: 10}}>
          Tag People
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderColor: '#333333',
          width: '100%',
          paddingVertical: 12,
        }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tags}
          keyExtractor={index => index.id}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                marginLeft: 10,
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: '#333333',
                borderRadius: 3,
              }}>
              <Text style={{color: '#ccc', fontSize: 13}}>{item.Label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderColor: '#333333',
          width: '100%',
          paddingVertical: 12,
        }}>
        <Text style={{color: 'white', fontSize: 16, marginLeft: 10}}>
          Add music
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderColor: '#333333',
          width: '100%',
          paddingVertical: 12,
        }}>
        <Text style={{color: 'white', fontSize: 16, marginLeft: 10}}>
          Also post to
        </Text>
        <View
          style={{
            width: '100%',
            paddingVertical: 12,
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'white', fontSize: 16, marginLeft: 10}}>
            Facebook
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            paddingVertical: 12,
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'white', fontSize: 16, marginLeft: 10}}>
            Twitter
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            paddingVertical: 12,
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'white', fontSize: 16, marginLeft: 10}}>
            Tumblr
          </Text>
        </View>
      </View>
      <Text
        style={{color: '#aaa', fontSize: 12, marginLeft: 10, marginTop: 10}}>
        Advanced settings
      </Text>
    </View>
  );
};

export default PostingScreen;
