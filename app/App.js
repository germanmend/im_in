import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import LogIn from './login/screen'
import Events from './events/screen'

export default class ClassName extends Component {
  render() {
    return (
      <AppStackNavigator/>
    )
  }
}

const AppStackNavigator = createStackNavigator({
  LogIn : { screen: LogIn },
  Events: { screen: Events },
})
