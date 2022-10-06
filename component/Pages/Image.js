import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ImageScreen = ({route , navigation}) => {
  const ItemData = route.params.item;

  return (
    <View style={{flex: 1}}>
      <View style={{height: '10%', backgroundColor: '#000000'}}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={35}
            color="#fff"
            style={{
              marginTop: 30,
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: '90%',
          backgroundColor: '#000000',
          justifyContent: 'center',
        }}>
        <Image
          source={{
            uri: ItemData.imageUrl,
          }}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '80%',
          }}
        />
      </View>
    </View>
  );
};

export default ImageScreen;
