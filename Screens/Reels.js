import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Video from 'react-native-video';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {ReelsData} from '../Data/ReelsData';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DoubleClick from 'react-native-double-tap';

const {height, width} = Dimensions.get('window');
const App = () => {
  const videRef = useRef(null);

  const [currentIndex, setIndex] = useState(0);

  const videoError = e => {
    console.log('Error raised ... ', e);
  };

  const onBuffer = e => {
    console.log('buffering ... ', e);
  };

  useEffect(() => {
    if (!!videRef.current) {
      videRef.current.seek(0);
    }
  }, [currentIndex]);

  const currentValue = new Animated.Value(1);
  const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);
  const [like, setLike] = useState(false);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);

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
  const RenderVideos = ({item, index}) => {
    return (
      <View style={{flex: 1, height: height}}>
         <DoubleClick
          activeOpacity={1}
          doubleTap={() => {
            // if (like == false) {
              setVisible(true);
            // }
            setLike(true);
          }}
          delay={0}
        >
        <Video
          source={item.url}
          poster={item.thumbnail}
          posterResizeMode="cover"
          ref={videRef}
          resizeMode="cover"
          onBuffer={onBuffer}
          onError={videoError}
          repeat={true}
          paused={currentIndex !== index ? true : paused ? true : false}
          style={styles.backgroundVideo}
          muted={muted ? true : false}
        />
        
        {visible && (
          <AnimatedIcon
            style={{
              position: 'absolute',
              alignSelf: 'center',
              top: 250,
              elevation: 5,
              opacity: 0.5,
              transform: [{scale: currentValue}],
            }}
            name="heart"
            size={100}
            color="#fff"
          />
        )}
        {paused && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setPaused(!paused)}
            style={{position: 'absolute', alignSelf: 'center', top: 250}}>
            <Ionicons name={'play-circle-outline'} size={150} color={'#fff'} />
          </TouchableOpacity>
        )}

        <View style={{justifyContent: 'flex-end', height: '100%'}}>
          <View style={{marginBottom: 70}}>
            {/* right-side-part */}
            <View
              style={{
                marginRight: 10,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (like == false) {
                    setVisible(true);
                  }
                  setLike(!like);
                }}>
                <Ionicons
                  name={like ? 'heart' : 'heart-outline'}
                  size={32}
                  color={like ? '#ff4444' : '#fff'}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: '600',
                  marginTop: 5,
                }}>
                {item.Like}
              </Text>
              <AntDesign
                name={'message1'}
                size={28}
                color={'#fff'}
                style={{marginTop: 20}}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: '600',
                  marginTop: 5,
                }}>
                {item.Comments}
              </Text>
              <Ionicons
                name="paper-plane-outline"
                size={23}
                color="#fff"
                style={{
                  marginTop: 20,
                }}
              />
              {muted ? (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setMuted(!muted)}>
                  <Ionicons
                    name="volume-mute"
                    size={23}
                    color="#fff"
                    style={{
                      marginTop: 20,
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setMuted(!muted)}>
                  <Octicons
                    name="unmute"
                    size={23}
                    color="#fff"
                    style={{
                      marginTop: 20,
                    }}
                  />
                </TouchableOpacity>
              )}
            </View>
            {/* bottom-part */}
            <View style={{marginLeft: 10, marginRight: 10, marginTop: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{height: 30, width: 30, borderRadius: 15}}
                    source={{
                      uri: item.ProfileImage,
                    }}
                  />
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 16, color: '#fff', marginLeft: 10}}>
                      {item.user}
                    </Text>
                    {item.VerifiedAccount === true && (
                      <MaterialIcons
                        name="verified"
                        size={15}
                        color="#0096FF"
                        style={{marginLeft: 5}}
                      />
                    )}
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      height: 25,
                      width: 60,
                      backgroundColor: 'transparent',
                      borderWidth: 1,
                      borderColor: '#ffffff',
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 10,
                    }}>
                    <Text
                      style={{fontSize: 13, color: '#fff', fontWeight: '600'}}>
                      Follow
                    </Text>
                  </TouchableOpacity>
                </View>
                <SimpleLineIcons
                  name="options-vertical"
                  size={18}
                  color="#fff"
                  style={{marginRight: 5}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <View>
                  <Text style={{fontSize: 14, color: '#fff'}}>
                    {item.subTitle.length > 40
                      ? item.subTitle.slice(0, 40) + '...'
                      : item.subTitle}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        height: 5,
                        width: 2,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        marginRight: 2,
                      }}></View>
                    <View
                      style={{
                        height: 10,
                        width: 4,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                      }}></View>
                    <View
                      style={{
                        height: 5,
                        width: 2,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        marginLeft: 2,
                      }}></View>
                    <Text style={{fontSize: 14, color: '#fff', marginLeft: 10}}>
                      {item.Song.length > 40
                        ? item.Song.slice(0, 40) + '...'
                        : item.Song}
                    </Text>
                  </View>
                </View>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 7,
                    borderWidth: 2,
                    borderColor: '#fff',
                  }}
                  source={{
                    uri: item.ProfileImage,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        </DoubleClick>
      </View>
    );
  };

  const onChangeIndex = ({index}) => {
    setIndex(index);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />

      <SwiperFlatList
        vertical={true}
        data={ReelsData}
        renderItem={RenderVideos}
        keyExtractor={(item, index) => index.toString()}
        onChangeIndex={onChangeIndex}
      />
      <View
        style={{
          marginTop: 30,
          position: 'absolute',
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginLeft: 20,
            color: '#fff',
            fontSize: 20,
            fontWeight: '700',
          }}>
          Reels
        </Text>
        <TouchableOpacity onPress={() => setPaused(!paused)}>
          <Ionicons
            name={!paused ? 'pause' : ''}
            size={30}
            color={'#fff'}
            style={{marginRight: 20}}
          />
        </TouchableOpacity>
        <Feather
          name={'camera'}
          size={25}
          color={'#fff'}
          style={{marginRight: 20}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    height: height,
    width: width,
  },
});
export default App;
