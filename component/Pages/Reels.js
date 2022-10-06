import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import React, { useEffect,useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Images = ({item, navigation}) => {
  return (
    <View
      style={{
        width: '32%',
        height: 120,
        backgroundColor: '#ccc',
        marginLeft: '1%',
        marginBottom: 4,
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Image', {item: item});
        }}>
        <Image
          source={{
            uri: item.imageUrl,
          }}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
const Reels = ({navigation, PostData}) => {

  return (
    <View style={{backgroundColor: '#000000', flex: 1}}>
      <View style={{marginBottom: 60}}>
        {PostData.length === 0 ? (
          <>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                borderWidth: 3,
                borderColor: '#fff',
                marginBottom: 30,
                marginTop: 50,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Ionicons name="camera-outline" size={70} color="#fff" />
            </View>

            <Text style={{fontSize: 25, color: '#fff',alignSelf: 'center',}}>No Posts Yet</Text>
          </>
        ) : (
          <FlatList
            data={PostData}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Images item={item} navigation={navigation} />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Reels;
