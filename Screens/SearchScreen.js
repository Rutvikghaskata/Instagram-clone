import {View, Text, TouchableOpacity, Image, ScrollView,StyleSheet,Dimensions} from 'react-native';
import React,{useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
const {height, width} = Dimensions.get('window');
const Invite = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <View
        style={{
          height: 50,
          backgroundColor: '#000000',
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{width: '100%'}}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Search')}>
          <View
            style={{
              height: 35,
              backgroundColor: '#333333',
              paddingHorizontal: 10,
              borderRadius: 10,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ionicons
              name={'search'}
              size={20}
              color={'#fff'}
              style={{
                marginRight: 10,
              }}
            />
            <Text style={{color: '#ccc', fontSize: 16}}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Post />
    </View>
  );
};

const Post = () => {
  const videRef = useRef(null);
  return (
    <ScrollView
      style={{flex: 1, marginBottom: 60}}
      showsVerticalScrollIndicator={false}>
      <View style={{flexDirection: 'row'}}>
        <View style={{height: 245, width: '32%', marginLeft: '1%'}}>
          <View style={{height: 120, width: '100%'}}>
            <Image
              source={{
                uri: 'https://c1.wallpaperflare.com/preview/994/558/349/man-suit-businessperson-caucasian.jpg',
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                marginTop: 4,
              }}
            />
          </View>
          <View style={{height: 120, width: '100%', marginTop: 5}}>
            <Image
              source={{
                uri: 'https://w0.peakpx.com/wallpaper/664/731/HD-wallpaper-smiley-girl-model-is-standing-near-glass-door-wearing-red-dress-girls.jpg',
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                marginTop: 4,
              }}
            />
          </View>
        </View>
        <View style={{height: 245, width: '32%', marginLeft: '1%'}}>
          <View style={{height: 120, width: '100%'}}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk6EN-yYUiRXOSFQQ2PPYVdY5CNRFMgw3Og&usqp=CAU',
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                marginTop: 4,
              }}
            />
          </View>
          <View style={{height: 120, width: '100%', marginTop: 5}}>
            <Image
              source={{
                uri: 'https://www.aarong.com/media/catalog/category/men-app-menu-500x500-210422.jpg',
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                marginTop: 4,
              }}
            />
          </View>
        </View>
        <View style={{height: 245, width: '32%', marginLeft: '1%'}}>
        <Video
          source={require('../Data/Videos/2.mp4')}
          // poster={item.thumbnail}
          posterResizeMode="cover"
          ref={videRef}
          resizeMode="cover"
          // onBuffer={onBuffer}
          // onError={videoError}
          repeat={true}
          // paused={currentIndex !== index ? true : paused ? true : false}
          style={styles.backgroundVideo}
          muted
        />
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 5}}>
        <View style={{height: 245, width: '32%', marginLeft: '1%'}}>
          <View style={{height: 120, width: '100%'}}>
            <Image
              source={{
                uri: 'https://media.istockphoto.com/photos/beautiful-smiling-african-ethnicity-businesswoman-picture-id1300304411?b=1&k=20&m=1300304411&s=170667a&w=0&h=7K4_MgZl5jfWL_JD5tF4ZiMVuSqS3MI5nA4TFeTeGa4=',
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                marginTop: 4,
              }}
            />
          </View>
          <View style={{height: 120, width: '100%', marginTop: 5}}>
            <Image
              source={{
                uri: 'https://cdn.wallpapersafari.com/72/87/8wBigF.jpg',
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                marginTop: 4,
              }}
            />
          </View>
        </View>
        <View style={{height: 245, width: '32%', marginLeft: '1%'}}>
          <View style={{height: 120, width: '100%'}}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgdhvC_7xp9YNr601VtOlImAv4s6AEIZf9qzibTyhkZJSjU2f1bFgZmhgerzfin5sc54&usqp=CAU',
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                marginTop: 4,
              }}
            />
          </View>
          <View style={{height: 120, width: '100%', marginTop: 5}}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-HzXhkQct8vPQobNGq9-B5NtrkFh3GhCxDQ&usqp=CAU',
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                marginTop: 4,
              }}
            />
          </View>
        </View>
        <View style={{height: 245, width: '32%', marginLeft: '1%'}}>
          <View style={{height: 120, width: '100%'}}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakiLjHQi9QJdNh1bBd9Q2qLhRiJcjC0dATg&usqp=CAU',
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                marginTop: 4,
              }}
            />
          </View>
          <View style={{height: 120, width: '100%', marginTop: 5}}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tQrymTErlTvkzNWpEeQZh-nu4eFHoXyrkg&usqp=CAU',
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                marginTop: 4,
              }}
            />
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 5}}>
        <View style={{height: 240, width: '32%', marginLeft: '1%'}}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/a3/b8/b1/a3b8b1561b649561dd69c9760ff967d1.jpg',
            }}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              marginTop: 4,
            }}
          />
        </View>
        <View style={{height: 245, width: '32%', marginLeft: '1%'}}>
          <View style={{height: 120, width: '100%'}}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfMg_MNmF20p8rvCfTFI-Us80flGbK8WI7A&usqp=CAU',
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                marginTop: 4,
              }}
            />
          </View>
          <View style={{height: 120, width: '100%', marginTop: 5}}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK3tUpMZqlS80iP8QtSvmEvaH1ZCcvqgJd_g&usqp=CAU',
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                marginTop: 4,
              }}
            />
          </View>
        </View>
        <View style={{height: 245, width: '32%', marginLeft: '1%'}}>
          <View style={{height: 120, width: '100%'}}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN94U7LDEHb-6DWX7o6ZZKx2sNI-Lsfc3Yw&usqp=CAU',
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                marginTop: 4,
              }}
            />
          </View>
          <View style={{height: 120, width: '100%', marginTop: 5}}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMPKkh22N38Y9MKTEFYN59bBphDvdrhW2qA&usqp=CAU',
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                marginTop: 4,
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    height: '100%',
    width: '100%',
  },
});
export default Invite;
