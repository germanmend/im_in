import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native'
import Animation from 'lottie-react-native'
import React, { Component } from 'react'
import styles from './style'
import * as Services from './services'

import user from '../assets/animations/a_user.json'
import bird from '../assets/animations/birds.json'

export default class LogIn extends Component {
  static navigationOptions = { header: null }

  async componentWillMount(){
    const user = await Services.currentUser()
    if(user && user.nick) {
      this.props.navigation.navigate('List')
    }
  }

  componentDidMount() {
    this.birdAnimation.play()
    this.userAnimation.play()
  }

  async register(nick) {
    if(nick.trim() != '') {
      try {
        await Services.writeUserData(nick)
        this.props.navigation.navigate('List')
      } catch (e) {

      }
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.main }>
          <View style={{ flexDirection: 'row' }}>
            <Text style = { styles.headerBold }>
              { this.props.user }
            </Text>
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
              loop={ false }
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
              onSubmitEditing={(event) => this.register(event.nativeEvent.text)}
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
