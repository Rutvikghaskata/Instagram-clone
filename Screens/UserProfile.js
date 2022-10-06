import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import React,{useState,useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import TopTabBar from '../component/TopTabBar';
import firestore from '@react-native-firebase/firestore';

const UserProfile = ({route , navigation}) => {
  const item = route.params.item;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try{
    firestore()
      .collection('users')
      .doc(item.owner_email)
      .collection('posts')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(post => (post.data())));
      });
    }catch(e) {
      console.log(e.message)
    }
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
            name="arrow-back"
            size={30}
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
            {item.user}
          </Text>
        </View>
        <TouchableOpacity>
          <SimpleLineIcons name="options-vertical" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 10, paddingTop: 15,flexDirection:'row',justifyContent: 'space-between',alignItems: 'center'}}>
        <TouchableOpacity>
          <LinearGradient
            colors={['#CA1D7E', '#E35157', '#F2703F']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            F2703F
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: '95%',
                width: '95%',
                borderRadius: 50,
                backgroundColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={{uri: item.imageUrl}}
                style={{
                  height: '95%',
                  width: '95%',
                  borderRadius: 50,
                }}
                resizeMode="cover"
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
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
          <View style={{alignItems: 'center', marginLeft: 20}}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: '600'}}>
              387
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>Following</Text>
          </View>
        </View>
      </View>

      <Text style={{fontSize: 14, color: '#fff',marginLeft:10,marginTop:10}}>
              {item.user}
      </Text>

       <View style={{padding:10,flexDirection: 'row',justifyContent: 'space-between'}}>
         <TouchableOpacity style={{paddingVertical:7,width:'42%',alignItems: 'center',borderRadius:5,borderWidth:1,borderColor:'#aaa'}}>
           <Text style={{fontSize: 13, color: '#fff'}}>
                Following
            </Text>
         </TouchableOpacity>
         <TouchableOpacity style={{paddingVertical:7,width:'42%',alignItems: 'center',borderRadius:5,borderWidth:1,borderColor:'#aaa'}}>
           <Text style={{fontSize: 13, color: '#fff'}}>
                Message
            </Text>
         </TouchableOpacity>
         <TouchableOpacity style={{paddingVertical:7,width:'10%',alignItems: 'center',borderRadius:5,borderWidth:1,borderColor:'#aaa'}}>
         <Ionicons
            name="person-add-outline"
            size={15}
            color="#fff"
          />
         </TouchableOpacity>
       </View>
       <TopTabBar PostData={posts}/>
    </View>
  );
};

export default UserProfile;
