import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, TouchableOpacity, Image} from 'react-native';
import Post from './Pages/Post';
import Reels from './Pages/Reels';
import Taged from './Pages/Taged';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
const Tab = createMaterialTopTabNavigator();

function MyTabBar({state, descriptors, navigation, position}) {
  const image =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk6EN-yYUiRXOSFQQ2PPYVdY5CNRFMgw3Og&usqp=CAU';
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              borderColor: isFocused ? '#fff' : '#000',
              borderBottomWidth: 2,
              height: 50,
              justifyContent: 'center',
            }}>
              <LinearGradient
              colors={
                
                   ['#000000', '#000000', '#000000']
              }
              // start={{x: 0.0, y: 1.0}}
              // end={{x: 1.0, y: 1.0}}
              style={{
                height: '100%',
                width: '100%',
                // borderRadius: 40,
                justifyContent: 'center',
                // borderWidth: item.id === view ? 1 : 0,
                // borderColor:'#aaa'
              }}>
            {label == 'Reels' ? (
              <Image
                source={require('../images/video.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: isFocused ? '#fff' : '#ccc',
                  alignSelf: 'center',
                }}
              />
            ) : label == 'Post' ? (
              <FontAwesome
                name="table"
                size={22}
                color={isFocused ? '#fff' : '#ccc'}
                style={{alignSelf: 'center'}}
              />
            ) : (
              <MaterialCommunityIcons
                name="content-save-outline"
                size={25}
                color={isFocused ? '#fff' : '#ccc'}
                style={{alignSelf: 'center'}}
              />
            )}
            </LinearGradient>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function MyTabs({PostData}) {
  
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Post">
        {props => <Post PostData={PostData} {...props} />} 
      </Tab.Screen>
      <Tab.Screen name="Reels">
        {props => <Reels PostData={PostData} {...props} />} 
      </Tab.Screen>
      <Tab.Screen name="Taged">
        {props => <Taged PostData={PostData} {...props} />} 
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default MyTabs;
