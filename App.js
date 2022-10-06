import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Image from './component/Pages/Image';
import Search from './component/Pages/Search';
import Story from './component/Pages/Story';
import LoginScreen from './Auth/LoginScreen';
import RegisterScreen from './Auth/RegisterScreen';
import SplashScreen from './Screens/SplashScreen';
import UserProfileScreen from './Screens/UserProfile';
import ProfileImageSet from './Auth/ProfileImageSet';
import PostingScreen from './Screens/PostingScreens';
import EditProfile from './Screens/EditProfile';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Image" component={Image} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Story" component={Story} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SetProfile" component={ProfileImageSet} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="PostingScreen" component={PostingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
