import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { Images, Profiles } from './App/Themes';
import { Platform } from '@unimodules/core';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = { // similar to jedi state definition in lecture 2b
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.nav_bar} >

          <Image
            style = {styles.grey_picture}
            source={Images.gear}
          />

          <Image
            style={styles.logo} 
            source={Images.logo}
          /> 

          <Image
            style={styles.grey_picture}
            source={Images.chat}
          />

        </View>

        <View style={styles.card} >
          <Image style={styles.profile_pic}
          source={Images.harold} />
          <View style={styles.bio} >
            <Text
              style={styles.name }>
              {this.state.name}
            </Text>
            <Text
              style={styles.name}>
              ,
              </Text>

            <Text
              style={styles.age}>
              {this.state.age}
            </Text>
          </View>
          <Text
            style={styles.occupation} >
             {this.state.occupation}
          </Text>


        </View>

        <View style={styles.action_icons} >
          <TouchableOpacity style={styles.small_button}>
            <Image
              style = {styles.small_icon}
              source={Images.rewind}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.large_button}>
            <Image
              style = {styles.large_icon}
              source={Images.nope}
            />
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.small_button}>
            <Image
              style = {styles.small_icon}
              source={Images.boost}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.large_button}>
            <Image
              style = {styles.large_icon}
              source={Images.like}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.small_button}>
            <Image
              style = {styles.small_icon}
              source={Images.superLike}
            />
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
  },
  nav_bar: {
    height: Platform.OS === 'ios' ? 44 : 56,
    width: Dimensions.get('window').width - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#c5c5c5',
    marginBottom: 10
  }, 
  logo: {
    width: 79.82,
    height: 30,
    resizeMode: 'contain'
  },
  grey_picture: {
    width: 35,
    height: 35,
    tintColor: '#c5c5c5',
    resizeMode: 'contain'
  },
  card: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#c5c5c5',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  profile_pic: {
    // ensures that the profile image shows up square on devices
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').width - 50,
    resizeMode: 'contain',
  },
  bio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24
  },
  age: {
    fontSize: 24
  },
  occupation: {
    marginLeft: 10,
    marginBottom: 10,
    color: '#c5c5c5',
    fontSize: 16
  },
  action_icons: {
    width: Dimensions.get('window').width - 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10
  },
  large_button: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 100,
    backgroundColor: '#ffffff'
  },
  small_button: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 100,
    backgroundColor: '#ffffff'
  },
  large_icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  small_icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
});