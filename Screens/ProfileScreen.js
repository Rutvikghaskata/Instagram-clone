import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import TopTabBar from '../component/TopTabBar';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Header = ({user}) => {
  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Ionicons
          name="lock-closed-outline"
          size={15}
          color="#fff"
          style={{marginRight: 5, marginTop: 3, marginLeft: 7}}
        />
        <Text style={{color: '#fff', fontSize: 22}}>{user.name}</Text>
        <Ionicons
          name="chevron-down-sharp"
          size={20}
          color="#fff"
          style={{marginTop: 5}}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Feather
          name="plus-square"
          size={27}
          color="#fff"
          style={{marginRight: 25}}
        />
        <TouchableOpacity style={{marginRight: 10}}>
          <View
            style={{
              height: 2,
              width: 20,
              backgroundColor: '#fff',
              borderRadius: 10,
            }}></View>
          <View
            style={{
              height: 2,
              width: 20,
              backgroundColor: '#fff',
              borderRadius: 10,
              marginTop: 5,
            }}></View>
          <View
            style={{
              height: 2,
              width: 20,
              backgroundColor: '#fff',
              borderRadius: 10,
              marginTop: 5,
            }}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Profile = ({user,navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: user.ProfilePicture,
          }}
          resizeMode="cover"
          style={{
            width: 85,
            height: 85,
            borderRadius: 50,
            marginLeft: 7,
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: '600'}}>
              360
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>Posts</Text>
          </View>
          <View style={{alignItems: 'center', marginLeft: 20}}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: '600'}}>
              1.2M
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>Followers</Text>
          </View>
          <View style={{alignItems: 'center', marginLeft: 20, marginRight: 20}}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: '600'}}>
              387
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>Following</Text>
          </View>
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <Text style={{fontSize: 13, color: '#fff', marginLeft: 7}}>
          {user.name}
        </Text>
        <Text style={{fontSize: 13, color: '#fff', marginLeft: 7}}>
          {user.email}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 7,
          marginTop: 20,
        }}>
        <TouchableOpacity
          onPress={() => auth().signOut()}
          // onPress={() => navigation.navigate('EditProfile')}
          activeOpacity={0.8}
          style={{
            height: 30,
            width: '88%',
            borderRadius: 3,
            borderWidth: 0.5,
            borderColor: '#ccc',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15, color: '#fff'}}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: 30,
            width: '10%',
            borderRadius: 3,
            borderWidth: 0.5,
            borderColor: '#ccc',
            alignItems: 'center',
          }}>
          <Ionicons
            name="person-add-outline"
            size={20}
            color="#fff"
            style={{marginTop: 5}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const story = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWF0fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    label: 'Eating',
  },
  {
    id: 2,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyvdQa6gFSleiyL4B11CHZLInS7_4beYgz7Q&usqp=CAU',
    label: 'Wedding Time',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    label: 'Best journey ',
  },
  {
    id: 4,
    image:
      'https://image.shutterstock.com/image-photo/attractive-suited-man-checking-time-260nw-1019749372.jpg',
    label: 'Office Time',
  },
  {
    id: 5,
    image:
      'https://www.aarong.com/media/catalog/category/men-app-menu-500x500-210422.jpg',
    label: 'Blueberry',
  },
  {
    id: 6,
    image:
      'https://media.istockphoto.com/photos/beautiful-smiling-african-ethnicity-businesswoman-picture-id1300304411?b=1&k=20&m=1300304411&s=170667a&w=0&h=7K4_MgZl5jfWL_JD5tF4ZiMVuSqS3MI5nA4TFeTeGa4=',
    label: 'Blueberry',
  },
  {
    id: 7,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk6EN-yYUiRXOSFQQ2PPYVdY5CNRFMgw3Og&usqp=CAU',
    label: 'Blueberry',
  },
];
const Highlight = ({item, navigation}) => (
  <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate('Story', {name: item.label, image: item.image});
      }}>
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 35,
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: '#A9A9A9',
        }}>
        <Image
          source={{uri: item.image}}
          resizeMode="cover"
          style={{
            width: '90%',
            height: '90%',
            borderRadius: 40,
            alignSelf: 'center',
          }}
        />
      </View>
    </TouchableOpacity>
    <Text style={{color: 'white', alignSelf: 'center', fontSize: 12}}>
      {item.label.length > 12 ? item.label.slice(0, 11) + '...' : item.label}
    </Text>
  </View>
);
const ProfileScreen = ({navigation}) => {
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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.email)
      .collection('posts')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(post => (post.data())));
      });
  });
  return (
    <View style={{backgroundColor: '#000000', width: '100%', flex: 1}}>
      <Header user={user}/>
      <Profile user={user} navigation={navigation}/>

      <View>
        <FlatList
          data={story}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Highlight item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <TopTabBar PostData={posts}/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#000000',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
  },
  container: {
    marginTop: 10,
    backgroundColor: '#000000',
  },
});
export default ProfileScreen;
