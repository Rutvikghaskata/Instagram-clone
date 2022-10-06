import {View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
const LikeScreen = () => {
  const [followed, setFollowed] = useState(false);

  return (
    <ScrollView style={{backgroundColor: '#000000'}}>
    <View style={{flex: 1, backgroundColor: '#000000', padding: 10,marginBottom:100}}>
      <Text style={{color: '#ffffff', fontSize: 22, fontWeight: '500'}}>
        Activity
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: '#000000',
            borderWidth: 1.5,
            borderColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name={'md-person-add-outline'} size={32} color={'#fff'} />
        </View>
        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 15, color: '#fff'}}>Follow request</Text>
          <Text style={{fontSize: 15, color: '#aaa'}}>
            Approve or ignore request
          </Text>
        </View>
      </View>
      <Text
        style={{fontSize: 17, color: '#fff', marginTop: 10, fontWeight: '500'}}>
        Today
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: '#fff',
            }}>
            <Image
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C5603AQGB0uZzOS5_YQ/profile-displayphoto-shrink_200_200/0/1648196627563?e=1655337600&v=beta&t=EiHCZGuenoOxD1OXhjEXcBsT2hkQE_ZebDJair1amQA',
              }}
              style={{height: '100%', width: '100%', borderRadius: 25}}
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 15, color: '#fff'}}>
              Mahesh_Pandav is on
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>
              Instagram.Dhara_Kachhadiya
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>
              and 15 others also follow{' '}
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>
              them. <Text style={{fontSize: 15, color: '#aaa'}}>17h.</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: 30,
            width: 80,
            backgroundColor: followed ? '#000000' : '#1E90FF',
            borderWidth: followed ? 2 : 0,
            borderColor: '#ffffff',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}
          onPress={() => {
            setFollowed(!followed);
          }}>
          <Text style={{fontSize: 14, color: '#fff', fontWeight: '600'}}>
            {followed ? 'UnFollow' : 'Follow'}
          </Text>
        </TouchableOpacity>
      </View>

      
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 25,
              backgroundColor: '#fff',
            }}>
            <Image
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C5603AQGB0uZzOS5_YQ/profile-displayphoto-shrink_200_200/0/1648196627563?e=1655337600&v=beta&t=EiHCZGuenoOxD1OXhjEXcBsT2hkQE_ZebDJair1amQA',
              }}
              style={{height: '100%', width: '100%', borderRadius: 25}}
            />
          </View>
          <View
            style={{
              height: 45,
              width: 45,
              borderRadius: 25,
              backgroundColor: '#000000',
              marginLeft:-30,
              marginTop:10,
              justifyContent:'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQFYCV8yusZtyA/profile-displayphoto-shrink_200_200/0/1646405426135?e=1652918400&v=beta&t=anhpTW2kif7tCW5tXQVLdFylZEL3M-Eo8IsAw7_7Eig',
              }}
              style={{height: '90%', width: '90%', borderRadius: 25}}
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 15, color: '#fff'}}>
              Crazy_boy_18,_Rocky_20 and 20
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>
              Others started following you
            </Text>
          </View>
        </View>
      </View>

      <Text
        style={{fontSize: 17, color: '#fff', marginTop: 15, fontWeight: '500'}}>
        This Week
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row',marginTop: 10}}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 25,
              backgroundColor: '#fff',
            }}>
            <Image
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C5603AQGB0uZzOS5_YQ/profile-displayphoto-shrink_200_200/0/1648196627563?e=1655337600&v=beta&t=EiHCZGuenoOxD1OXhjEXcBsT2hkQE_ZebDJair1amQA',
              }}
              style={{height: '100%', width: '100%', borderRadius: 25}}
            />
          </View>
          <LinearGradient
          colors={['#CA1D7E', '#E35157', '#F2703F']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: '#000000',
            marginLeft:-30,
            marginTop:10,
            justifyContent:'center',
            alignItems: 'center',
          }}>
             <View
            style={{
              height: 42,
              width: 42,
              borderRadius: 25,
              backgroundColor: '#000000',
              justifyContent:'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQFYCV8yusZtyA/profile-displayphoto-shrink_200_200/0/1646405426135?e=1652918400&v=beta&t=anhpTW2kif7tCW5tXQVLdFylZEL3M-Eo8IsAw7_7Eig',
              }}
              style={{height: '95%', width: '95%', borderRadius: 25}}
            />
            </View>
           </LinearGradient>
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 15, color: '#fff'}}>
              Crazy_boy_18 and _Rocky_20 
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>
              liked your Photo
            </Text>
          </View>
        </View>

        <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#000000',
              justifyContent:'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk6EN-yYUiRXOSFQQ2PPYVdY5CNRFMgw3Og&usqp=CAU',
              }}
              resizeMode="cover"
              style={{height: '90%', width: '90%'}}
            />
          </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row',marginTop: 10}}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 25,
              backgroundColor: '#fff',
            }}>
            <Image
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C5603AQGB0uZzOS5_YQ/profile-displayphoto-shrink_200_200/0/1648196627563?e=1655337600&v=beta&t=EiHCZGuenoOxD1OXhjEXcBsT2hkQE_ZebDJair1amQA',
              }}
              style={{height: '100%', width: '100%', borderRadius: 25}}
            />
          </View>
          <LinearGradient
          colors={['#CA1D7E', '#E35157', '#F2703F']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: '#000000',
            marginLeft:-30,
            marginTop:10,
            justifyContent:'center',
            alignItems: 'center',
          }}>
             <View
            style={{
              height: 42,
              width: 42,
              borderRadius: 25,
              backgroundColor: '#000000',
              justifyContent:'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQFYCV8yusZtyA/profile-displayphoto-shrink_200_200/0/1646405426135?e=1652918400&v=beta&t=anhpTW2kif7tCW5tXQVLdFylZEL3M-Eo8IsAw7_7Eig',
              }}
              style={{height: '95%', width: '95%', borderRadius: 25}}
            />
            </View>
           </LinearGradient>
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 15, color: '#fff'}}>
              Crazy_boy_18 and _Rocky_20 
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>
              liked your Photo
            </Text>
          </View>
        </View>

        <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#000000',
              justifyContent:'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://c1.wallpaperflare.com/preview/994/558/349/man-suit-businessperson-caucasian.jpg',
              }}
              resizeMode="cover"
              style={{height: '90%', width: '90%'}}
            />
          </View>

      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row',marginTop: 10}}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 25,
              backgroundColor: '#fff',
            }}>
            <Image
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C5603AQGB0uZzOS5_YQ/profile-displayphoto-shrink_200_200/0/1648196627563?e=1655337600&v=beta&t=EiHCZGuenoOxD1OXhjEXcBsT2hkQE_ZebDJair1amQA',
              }}
              style={{height: '100%', width: '100%', borderRadius: 25}}
            />
          </View>
          <LinearGradient
          colors={['#CA1D7E', '#E35157', '#F2703F']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: '#000000',
            marginLeft:-30,
            marginTop:10,
            justifyContent:'center',
            alignItems: 'center',
          }}>
             <View
            style={{
              height: 42,
              width: 42,
              borderRadius: 25,
              backgroundColor: '#000000',
              justifyContent:'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQFYCV8yusZtyA/profile-displayphoto-shrink_200_200/0/1646405426135?e=1652918400&v=beta&t=anhpTW2kif7tCW5tXQVLdFylZEL3M-Eo8IsAw7_7Eig',
              }}
              style={{height: '95%', width: '95%', borderRadius: 25}}
            />
            </View>
           </LinearGradient>
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 15, color: '#fff'}}>
              Crazy_boy_18 and _Rocky_20 
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>
              liked your Photo
            </Text>
          </View>
        </View>

        <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#000000',
              justifyContent:'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://w0.peakpx.com/wallpaper/664/731/HD-wallpaper-smiley-girl-model-is-standing-near-glass-door-wearing-red-dress-girls.jpg',
              }}
              resizeMode="cover"
              style={{height: '90%', width: '90%'}}
            />
          </View>

      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row',marginTop: 10}}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 25,
              backgroundColor: '#fff',
            }}>
            <Image
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C5603AQGB0uZzOS5_YQ/profile-displayphoto-shrink_200_200/0/1648196627563?e=1655337600&v=beta&t=EiHCZGuenoOxD1OXhjEXcBsT2hkQE_ZebDJair1amQA',
              }}
              style={{height: '100%', width: '100%', borderRadius: 25}}
            />
          </View>
          <LinearGradient
          colors={['#CA1D7E', '#E35157', '#F2703F']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: '#000000',
            marginLeft:-30,
            marginTop:10,
            justifyContent:'center',
            alignItems: 'center',
          }}>
             <View
            style={{
              height: 42,
              width: 42,
              borderRadius: 25,
              backgroundColor: '#000000',
              justifyContent:'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQFYCV8yusZtyA/profile-displayphoto-shrink_200_200/0/1646405426135?e=1652918400&v=beta&t=anhpTW2kif7tCW5tXQVLdFylZEL3M-Eo8IsAw7_7Eig',
              }}
              style={{height: '95%', width: '95%', borderRadius: 25}}
            />
            </View>
           </LinearGradient>
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 15, color: '#fff'}}>
              Crazy_boy_18 and _Rocky_20 
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>
              liked your Photo
            </Text>
          </View>
        </View>

        <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#000000',
              justifyContent:'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/236x/89/1a/78/891a78bb339e9438feaadd7e9291091d--kosta-martakis-greek-men.jpg',
              }}
              resizeMode="cover"
              style={{height: '90%', width: '90%'}}
            />
          </View>

      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row',marginTop: 10}}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 25,
              backgroundColor: '#fff',
            }}>
            <Image
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C5603AQGB0uZzOS5_YQ/profile-displayphoto-shrink_200_200/0/1648196627563?e=1655337600&v=beta&t=EiHCZGuenoOxD1OXhjEXcBsT2hkQE_ZebDJair1amQA',
              }}
              style={{height: '100%', width: '100%', borderRadius: 25}}
            />
          </View>
          <LinearGradient
          colors={['#CA1D7E', '#E35157', '#F2703F']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: '#000000',
            marginLeft:-30,
            marginTop:10,
            justifyContent:'center',
            alignItems: 'center',
          }}>
             <View
            style={{
              height: 42,
              width: 42,
              borderRadius: 25,
              backgroundColor: '#000000',
              justifyContent:'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQFYCV8yusZtyA/profile-displayphoto-shrink_200_200/0/1646405426135?e=1652918400&v=beta&t=anhpTW2kif7tCW5tXQVLdFylZEL3M-Eo8IsAw7_7Eig',
              }}
              style={{height: '95%', width: '95%', borderRadius: 25}}
            />
            </View>
           </LinearGradient>
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 15, color: '#fff'}}>
              Crazy_boy_18 and _Rocky_20 
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>
              liked your Photo
            </Text>
          </View>
        </View>

        <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#000000',
              justifyContent:'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk6EN-yYUiRXOSFQQ2PPYVdY5CNRFMgw3Og&usqp=CAU',
              }}
              resizeMode="cover"
              style={{height: '90%', width: '90%'}}
            />
          </View>
      </View>
      
      <Text
        style={{fontSize: 17, color: '#fff', marginTop: 10, fontWeight: '500'}}>
        This Month
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: '#fff',
            }}>
            <Image
              source={{
                uri: 'https://media-exp1.licdn.com/dms/image/C5603AQGB0uZzOS5_YQ/profile-displayphoto-shrink_200_200/0/1648196627563?e=1655337600&v=beta&t=EiHCZGuenoOxD1OXhjEXcBsT2hkQE_ZebDJair1amQA',
              }}
              style={{height: '100%', width: '100%', borderRadius: 25}}
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 15, color: '#fff'}}>
              MAhesh Pandav,who you 
            </Text>
            <Text style={{fontSize: 15, color: '#fff'}}>
              might know, is on instagram
            </Text>
             <Text style={{fontSize: 15, color: '#aaa'}}>17h.</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: 30,
            width: 80,
            backgroundColor: followed ? '#000000' : '#1E90FF',
            borderWidth: followed ? 2 : 0,
            borderColor: '#ffffff',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}
          onPress={() => {
            setFollowed(!followed);
          }}>
          <Text style={{fontSize: 14, color: '#fff', fontWeight: '600'}}>
            {followed ? 'UnFollow' : 'Follow'}
          </Text>
        </TouchableOpacity>
      </View>


    </View>
    </ScrollView>
  );
};

export default LikeScreen;
