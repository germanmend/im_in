import { Dimensions, Text, View, ImageBackground, FlatList, List } from 'react-native'
import Animation from 'lottie-react-native'
import React, { Component } from 'react'
import styles from './style'

import space from '../assets/images/space3.jpg'
import watch from '../assets/animations/clock.json'

export default class Events extends Component {
  static navigationOptions = { header: null }

  constructor() {
    super()
    this.state = {
      data: [
        {title: 'here i come', body: 'body', time: '12:51', place: 'here', by: 'me', in: 5},
        {title: 'here i come', body: 'body', time: '12:51', place: 'here', by: 'me', in: 5},
        {title: 'here i come', body: 'body', time: '12:51', place: 'here', by: 'me', in: 5},
        {title: 'here i come', body: 'body', time: '12:51', place: 'here', by: 'me', in: 5},
        {title: 'here i come', body: 'body', time: '12:51', place: 'here', by: 'me', in: 5},
        {title: 'here i come', body: 'body', time: '12:51', place: 'here', by: 'me', in: 5},
        {title: 'here i come', body: 'body', time: '12:51', place: 'here', by: 'me', in: 5},
        {title: 'here i come', body: 'body', time: '12:51', place: 'here', by: 'me', in: 5},
        {title: 'here i come', body: 'body', time: '12:51', place: 'here', by: 'me', in: 5},
        {title: 'here i come', body: 'body', time: '12:51', place: 'here', by: 'me', in: 5},
        {title: 'here i come', body: 'body', time: '12:51', place: 'here', by: 'me', in: 5},
        {title: 'here i come', body: 'body', time: '12:51', place: 'here', by: 'me', in: 5},
      ]
    }
  }

  componentDidMount() {
    this.watchAnimation.play()
  }

  Item = ({ item }) => {
    return(
      <View style = { styles.item }>
        <View style = { styles.itemBody }>
          <Text style = { styles.itemTitle }> { item.title } </Text>
          <View style = { {flexDirection: 'row',} }>
            <Animation
              ref = {animation => { this.watchAnimation = animation }}
              style = { styles.watchAnimation }
              loop = { true }
              source = { watch }
            />
            <Text style = { {} }> { item.time } </Text>
          </View>
          <Text style = { {} }> { item.place } </Text>
          <Text style = { {} }> { item.by } </Text>
          <Text style = { {} }> { item.in } </Text>
        </View>
        <View style = { styles.itemProps }>
          <Text style = { {} }> { item.body } </Text>
        </View>
      </View>
    )
  }

  render() {
    console.log(this.state.data)

    return (
      <ImageBackground
        style = { styles.container }
        source = { space }
        >
        <Animation
          ref = {animation => { this.watchAnimation = animation }}
          style = { styles.watchAnimation }
          loop = { true }
          source = { watch }
        />
        <FlatList
          style = {{ flex: 1 }}
          data = { this.state.data }
          renderItem = { this.Item }
          showsVerticalScrollIndicator = { false }
        />
      </ImageBackground>
    );
  }
}
