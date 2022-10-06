import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Animated,
  ImageBackground,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DoubleClick from 'react-native-double-tap';

const story = [
  {
    id: 1,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk6EN-yYUiRXOSFQQ2PPYVdY5CNRFMgw3Og&usqp=CAU',
    user: 'Your Story',
    story: false,
    LikedImage1:
      'https://w0.peakpx.com/wallpaper/664/731/HD-wallpaper-smiley-girl-model-is-standing-near-glass-door-wearing-red-dress-girls.jpg',
    LikedImage2:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk6EN-yYUiRXOSFQQ2PPYVdY5CNRFMgw3Og&usqp=CAU',
    LikedImage3:
      'https://www.aarong.com/media/catalog/category/men-app-menu-500x500-210422.jpg',
    like: 120,
  },
  {
    id: 2,
    image:
      'https://c1.wallpaperflare.com/preview/994/558/349/man-suit-businessperson-caucasian.jpg',
    user: 'Thedchilldpixel',
    LikedImage1:
      'https://w0.peakpx.com/wallpaper/664/731/HD-wallpaper-smiley-girl-model-is-standing-near-glass-door-wearing-red-dress-girls.jpg',
    LikedImage2:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk6EN-yYUiRXOSFQQ2PPYVdY5CNRFMgw3Og&usqp=CAU',
    LikedImage3:
      'https://www.aarong.com/media/catalog/category/men-app-menu-500x500-210422.jpg',
    like: 120,
  },
  {
    id: 3,
    image:
      'https://w0.peakpx.com/wallpaper/664/731/HD-wallpaper-smiley-girl-model-is-standing-near-glass-door-wearing-red-dress-girls.jpg',
    user: 'Girlyapa',
    LikedImage1:
      'https://w0.peakpx.com/wallpaper/664/731/HD-wallpaper-smiley-girl-model-is-standing-near-glass-door-wearing-red-dress-girls.jpg',
    LikedImage2:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk6EN-yYUiRXOSFQQ2PPYVdY5CNRFMgw3Og&usqp=CAU',
    LikedImage3:
      'https://www.aarong.com/media/catalog/category/men-app-menu-500x500-210422.jpg',
    like: 120,
  },
  {
    id: 4,
    image:
      'https://i.pinimg.com/236x/89/1a/78/891a78bb339e9438feaadd7e9291091d--kosta-martakis-greek-men.jpg',
    user: 'StarryEyes',
    LikedImage1:
      'https://w0.peakpx.com/wallpaper/664/731/HD-wallpaper-smiley-girl-model-is-standing-near-glass-door-wearing-red-dress-girls.jpg',
    LikedImage2:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk6EN-yYUiRXOSFQQ2PPYVdY5CNRFMgw3Og&usqp=CAU',
    LikedImage3:
      'https://www.aarong.com/media/catalog/category/men-app-menu-500x500-210422.jpg',
    like: 120,
  },
  {
    id: 5,
    image:
      'https://www.aarong.com/media/catalog/category/men-app-menu-500x500-210422.jpg',
    user: 'FabddGirl',
    LikedImage1:
      'https://w0.peakpx.com/wallpaper/664/731/HD-wallpaper-smiley-girl-model-is-standing-near-glass-door-wearing-red-dress-girls.jpg',
    LikedImage2:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk6EN-yYUiRXOSFQQ2PPYVdY5CNRFMgw3Og&usqp=CAU',
    LikedImage3:
      'https://www.aarong.com/media/catalog/category/men-app-menu-500x500-210422.jpg',
    like: 120,
  },
  {
    id: 6,
    image:
      'https://media.istockphoto.com/photos/beautiful-smiling-african-ethnicity-businesswoman-picture-id1300304411?b=1&k=20&m=1300304411&s=170667a&w=0&h=7K4_MgZl5jfWL_JD5tF4ZiMVuSqS3MI5nA4TFeTeGa4=',
    user: 'Blueberry',
    LikedImage1:
      'https://w0.peakpx.com/wallpaper/664/731/HD-wallpaper-smiley-girl-model-is-standing-near-glass-door-wearing-red-dress-girls.jpg',
    LikedImage2:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk6EN-yYUiRXOSFQQ2PPYVdY5CNRFMgw3Og&usqp=CAU',
    LikedImage3:
      'https://www.aarong.com/media/catalog/category/men-app-menu-500x500-210422.jpg',
    like: 120,
  },
  {
    id: 7,
    image:
      'https://media.istockphoto.com/photos/positivity-puts-you-in-a-position-of-power-picture-id1299077582?b=1&k=20&m=1299077582&s=170667a&w=0&h=Esjqlg_WCWmTc83Dv6PLhwPFwYN9uXoclBn0cUhtS5I=',
    user: 'Makegirls',

    LikedImage1:
      'https://w0.peakpx.com/wallpaper/664/731/HD-wallpaper-smiley-girl-model-is-standing-near-glass-door-wearing-red-dress-girls.jpg',
    LikedImage2:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk6EN-yYUiRXOSFQQ2PPYVdY5CNRFMgw3Og&usqp=CAU',
    LikedImage3:
      'https://www.aarong.com/media/catalog/category/men-app-menu-500x500-210422.jpg',

    like: 120,
  },
];
const Post = ({item, navigation}) => {
  const currentValue = new Animated.Value(1);
  const [visible, setVisible] = useState(false);
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

  const [LikedPost, setLikePost] = useState(item.likes_by_users.length);

  const [view, setView] = useState('');

  useEffect(() => {
    if (like === true) {
      Animated.spring(
        currentValue,
        {
          toValue: 2,
          friction: 2,
          useNativeDriver: true,
        },
        [like],
      ).start(() => {
        setVisible(false);
      });
    }
  });

  const currentLikeStatus = !item.likes_by_users.includes(
    auth().currentUser.email,
  );
  return (
    <View key={item.uid}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              if (item.story === false) {
                Alert.alert('please First Post Story');
              } else {
                setView(item.id);
                navigation.navigate('Story', {
                  name: item.user,
                  image: item.imageUrl,
                });
              }
            }}>
            <LinearGradient
              colors={
                item.story === false
                  ? ['#000', '#000', '#000']
                  : item.id === view
                  ? ['#000', '#000', '#000']
                  : ['#CA1D7E', '#E35157', '#F2703F']
              }
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: '95%',
                  height: '95%',
                  backgroundColor: '#000',
                  borderRadius: 40,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={{uri: item.ProfilePicture}}
                  resizeMode="cover"
                  style={{
                    width: '90%',
                    height: '90%',
                    borderRadius: 40,
                    alignSelf: 'center',
                  }}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('UserProfile', {item: item})}>
            <Text style={{color: 'white', fontSize: 13, marginLeft: 10}}>
              {item.user}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View
            style={{
              height: 3,
              width: 3,
              borderRadius: 3,
              backgroundColor: '#fff',
            }}></View>
          <View
            style={{
              height: 3,
              width: 3,
              borderRadius: 3,
              backgroundColor: '#fff',
              marginTop: 2,
            }}></View>
          <View
            style={{
              height: 3,
              width: 3,
              borderRadius: 3,
              backgroundColor: '#fff',
              marginTop: 2,
            }}></View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        {/* <DoubleClick
          doubleTap={() => {
            if (like == false) {
              setVisible(true);
            }
            setLike(!like);
            const currentLikeStatus = !item.likes_by_users.includes(
              auth().currentUser.email,
            );
            firestore()
              .collection('users')
              .doc(item.owner_email)
              .collection('posts')
              .doc(item.id)
              .update({
                likes_by_users: currentLikeStatus
                  ? firestore.FieldValue.arrayUnion(auth().currentUser.email)
                  : firestore.FieldValue.arrayRemove(auth().currentUser.email),
              })
              .then(() => {
                console.log('sucess');
              })
              .catch(err => {
                console.log(err.message);
              });
          }}
          delay={200}> */}
        <ImageBackground
          source={{
            uri: item.imageUrl,
          }}
          resizeMode="cover"
          style={{
            width: '100%',
            height: 350,
            marginTop: 4,
          }}>
          {visible && (
            <AnimatedIcon
              style={{
                position: 'absolute',
                top: 120,
                alignSelf: 'center',
                elevation: 5,
                opacity: 0.5,
                transform: [{scale: currentValue}],
              }}
              name="heart"
              size={100}
              color="#fff"
            />
          )}
        </ImageBackground>
        {/* </DoubleClick> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              if (like == false) {
                setVisible(true);
              }
              setLike(!like);
              const currentLikeStatus = !item.likes_by_users.includes(
                auth().currentUser.email,
              );
              firestore()
                .collection('users')
                .doc(item.owner_email)
                .collection('posts')
                .doc(item.id)
                .update({
                  likes_by_users: currentLikeStatus
                    ? firestore.FieldValue.arrayUnion(auth().currentUser.email)
                    : firestore.FieldValue.arrayRemove(
                        auth().currentUser.email,
                      ),
                })
                .then(() => {
                  console.log('sucess');
                })
                .catch(err => {
                  console.log(err.message);
                });
            }}>
            <Ionicons
              name={!currentLikeStatus ? 'heart' : 'heart-outline'}
              size={28}
              color={!currentLikeStatus ? '#ff4444' : '#fff'}
              style={{
                marginTop: 5,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            color="#fff"
            style={{marginTop: 5, marginRight: 10}}
          />
          <Ionicons
            name="paper-plane-outline"
            size={23}
            color="#fff"
            style={{
              marginTop: 3,
            }}
          />
        </View>

        <TouchableOpacity>
          <Ionicons
            name={save ? 'bookmark' : 'bookmark-outline'}
            size={24}
            color="#fff"
            style={{marginTop: 5, marginRight: 7}}
            onPress={() => {
              setSave(!save);
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
        <View
          style={{
            width: 27,
            height: 27,
            borderRadius: 15,
            backgroundColor: '#000000',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: -10,
            zIndex: 2,
          }}>
          <Image
            source={{
              uri: 'https://w0.peakpx.com/wallpaper/664/731/HD-wallpaper-smiley-girl-model-is-standing-near-glass-door-wearing-red-dress-girls.jpg',
            }}
            resizeMode="cover"
            style={{
              width: 22,
              height: 22,
              borderRadius: 15,
            }}
          />
        </View>
        <View
          style={{
            width: 27,
            height: 27,
            borderRadius: 15,
            backgroundColor: '#000000',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: -10,
            zIndex: 1,
          }}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk6EN-yYUiRXOSFQQ2PPYVdY5CNRFMgw3Og&usqp=CAU',
            }}
            resizeMode="cover"
            style={{
              width: 22,
              height: 22,
              borderRadius: 15,
            }}
          />
        </View>
        <View
          style={{
            width: 27,
            height: 27,
            borderRadius: 15,
            backgroundColor: '#000000',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://www.aarong.com/media/catalog/category/men-app-menu-500x500-210422.jpg',
            }}
            resizeMode="cover"
            style={{
              width: 22,
              height: 22,
              borderRadius: 15,
            }}
          />
        </View>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            fontSize: 13,
            marginLeft: 10,
          }}>
          Like by Rocky_18 and {item.likes_by_users.length} Others
        </Text>
      </View>
      <Text
        style={{
          color: 'white',
          fontWeight: '600',
          fontSize: 13,
          marginLeft: 10,
          marginTop: 10,
        }}>
        {item.caption}
      </Text>
      <Text
        style={{
          color: 'gray',
          fontWeight: '600',
          fontSize: 13,
          marginLeft: 10,
          marginTop: 10,
        }}>
        View all 4 comments
      </Text>
      <Text
        style={{
          color: 'white',
          fontWeight: '600',
          fontSize: 15,
          marginLeft: 10,
          marginTop: 3,
        }}>
        Kishana_mavanai nice
      </Text>
      <Text
        style={{
          color: 'gray',
          fontWeight: '600',
          fontSize: 11,
          marginLeft: 10,
          marginTop: 3,
        }}>
        13 hours ago
      </Text>
    </View>
  );
};

const Friends = ({navigation}) => {
  const Story = ({item, navigation}) => {
    const [view, setView] = useState('');

    return (
      <View style={{marginRight: 10}} key={item.uid}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            if (item.story === false) {
              Alert.alert('please First Post Story');
            } else {
              setView(item.id);
              navigation.navigate('Story', {
                name: item.user,
                image: item.image,
              });
            }
          }}>
          <LinearGradient
            colors={
              item.story === false
                ? ['#000', '#000', '#000']
                : item.id === view
                ? ['#000', '#000', '#000']
                : ['#CA1D7E', '#E35157', '#F2703F']
            }
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              justifyContent: 'center',
              borderWidth: item.id === view ? 1 : 0,
              borderColor: '#aaa',
            }}>
            <View
              style={{
                width: '95%',
                height: '95%',
                backgroundColor: '#000',
                borderRadius: 40,
                alignSelf: 'center',
              }}>
              <Image
                source={{uri: item.image}}
                resizeMode="cover"
                style={{
                  width: '90%',
                  height: '90%',
                  borderRadius: 40,
                  marginTop: 4,
                  alignSelf: 'center',
                }}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        {item.story === false && (
          <View
            style={{
              backgroundColor: '#000000',
              width: 27,
              height: 27,
              borderRadius: 15,
              marginTop: -30,
              marginLeft: 55,
              marginBottom: 2,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                width: 22,
                height: 22,
                borderRadius: 11,
              }}>
              <AntDesign name={'pluscircle'} size={22} color={'#1E90FF'} />
            </View>
          </View>
        )}

        <Text style={{color: 'white', alignSelf: 'center'}}>
          {item.user.length > 12 ? item.user.slice(0, 11) + '...' : item.user}
        </Text>
      </View>
    );
  };
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore()
      .collectionGroup('posts')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(post => ({id: post.id, ...post.data()})));
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffff',
      }}>
      <StatusBar hidden />
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../images/insta.jpg')}
            resizeMode="contain"
            style={{
              width: 120,
              height: 50,
            }}
          />
          <Ionicons
            name="chevron-down-sharp"
            size={20}
            color="#fff"
            style={{marginTop: 15}}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PostingScreen')}>
            <Feather
              name="plus-square"
              size={27}
              color="#fff"
              style={{marginTop: 5, marginRight: 35}}
            />
          </TouchableOpacity>
          <View
            style={{
              height: 20,
              width: 22,
              backgroundColor: '#ff4444',
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: -30,
              zIndex: 1,
            }}>
            <Text style={{color: 'white', fontSize: 12}}>10</Text>
          </View>
          <Ionicons
            name="ios-chatbubble-ellipses-outline"
            size={26}
            color="#fff"
            style={{marginTop: 5, marginRight: 10}}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#000000', width: '100%'}}>
        <View>
          <FlatList
            data={story}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <Story item={item} navigation={navigation} />
            )}
            keyExtractor={item => item.id}
          />
        </View>

        <View
          style={{backgroundColor: 'gray', height: 0.2, marginTop: 8}}></View>
        <View>
          {posts.map(item => (
            <Post item={item} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
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
});
export default Friends;
