import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../Screens/MainScreen';
import SearchScreen from '../Screens/SearchScreen';
import LikeScreen from '../Screens/LikeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Reels from '../Screens/Reels';
import React,{useState,useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const Tab = createBottomTabNavigator();

const Tabs = () => {
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
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#000',
          height: 60,
          ...styles.shadow,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {focused ? (
                <Ionicons
                  name="home-sharp"
                  size={28}
                  color={focused ? '#fff' : '#aaa'}
                />
              ) : (
                <Ionicons
                  name="home-outline"
                  size={28}
                  color={focused ? '#fff' : '#aaa'}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons
                name="search"
                size={30}
                color={focused ? '#fff' : '#aaa'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../images/video.png')}
                resizeMode="contain"
                style={{
                  width: 23,
                  height: 23,
                  tintColor: focused ? '#fff' : '#aaa',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="LikeScreen"
        component={LikeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {focused ? (
                <Ionicons
                  name="ios-heart"
                  size={30}
                  color={focused ? '#fff' : '#aaa'}
                />
              ) : (
                <Ionicons
                  name="ios-heart-outline"
                  size={30}
                  color={focused ? '#fff' : '#aaa'}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: focused ? 2 : 0,
                borderColor: '#fff',
                borderRadius: 20,
              }}>
              <Image
                source={{uri: user.ProfilePicture}}
                resizeMode="cover"
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 20,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
