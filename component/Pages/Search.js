import { View, Text ,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Search = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'#000000'}}>
        <View style={{flexDirection:'row',width:'95%',alignSelf:'center',marginTop:20}}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Home')} 
            activeOpacity={0.8}
            style={{
              marginRight: 10,
              width:'10%',
              marginRight:'3%',
              marginTop: 5,
            }} >
        <Ionicons       
            name={'arrow-back'}
            size={30}
            color={'#fff'}           
          />
          </TouchableOpacity>
           <View
            style={{
              height: 45,
              backgroundColor: '#333333',
              paddingHorizontal: 10,
              borderRadius: 10,
              width: '87%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
                <TextInput 
                  placeholder="Search Category" 
                  placeholderTextColor="#ccc"
                  autoFocus={true}
                  color={'white'}
                />
            </View>
        </View>
    </View>
  )
}

export default Search