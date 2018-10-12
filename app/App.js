import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native';
import Animation from 'lottie-react-native';

import bird from './assets/animations/birds.json';
import user from './assets/animations/a_user.json';

export default class lottieloader extends Component {
  componentDidMount() {
    this.birdAnimation.play();
    this.userAnimation.play();
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.main }>
          <View style={{ flexDirection: 'row' }}>
            <Text style = { styles.headerBold }>
              { "I´m" }
            </Text>
            <Text style = { styles.header }>
              In
            </Text>
          </View>
          <View style={ styles.divider }>
            <View style={ styles.lefter }>
              <Text/>
            </View>
            <View style={ styles.left }>
              <Text/>
            </View>
            <View style={ styles.middle }>
              <Text/>
            </View>
            <View style={ styles.right }>
              <Text/>
            </View>
            <View style={ styles.righter }>
              <Text/>
            </View>
          </View>
          <View>
            <Animation
              ref={animation => { this.birdAnimation = animation; }}
              style={ styles.birdAnimation }
              loop={ true }
              source={ bird }
            />
          </View>
        </View>
        <View style={ styles.register }>
          <Animation
            ref={animation => { this.userAnimation = animation; }}
            style={ styles.userAnimation }
            loop={ false }
            source={ user }
          />
          <View style={ { width:'100%', justifyContent: 'center', alignItems: 'center' } }>
            <TextInput
              style={ styles.registerInput }
              placeholderTextColor='white'
              placeholder="choose a name"
              underlineColorAndroid='transparent'
            />
            <View style={ styles.divider }>
              <View style={ styles.lefter }>
                <Text/>
              </View>
              <View style={ styles.left }>
                <Text/>
              </View>
              <View style={ styles.middle }>
                <Text/>
              </View>
              <View style={ styles.right }>
                <Text/>
              </View>
              <View style={ styles.righter }>
                <Text/>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#028090',
  },
  main: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#028090',
  },
  headerBold: {
    color: 'white',
    fontSize: 50,
    fontWeight: '900',
  },
  header: {
    color: 'white',
    fontSize: 50,
    fontWeight: '100',
  },
  birdAnimation: {
    width: '70%',
    height: 400,
  },
  userAnimation: {
    width: '20%',
    height: 80,
  },
  divider: {
    flexDirection: 'row',
    width:'70%',
  },
  lefter: {
    borderTopColor: '#3e92cc',
    borderTopWidth: 3,
    width:'20%',
  },
  left: {
    borderTopColor: '#92374d',
    borderTopWidth: 3,
    width:'20%',
  },
  middle: {
    borderTopColor: '#028090',
    borderTopWidth: 3,
    width:'20%',
  },
  right: {
    borderTopColor: '#659157',
    borderTopWidth: 3,
    width:'20%',
  },
  righter: {
    borderTopColor: '#ffbf00',
    borderTopWidth: 3,
    width:'20%',
  },
  register: {
    flexDirection: 'row',
    width:'80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '10%',
    marginRight: '10%',
    marginBottom: '10%',
  },
  registerInput: {
    width:'100%',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    borderWidth: 0,
  }
});
