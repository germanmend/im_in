import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import LogIn from './login/screen'
import List from './list/screen'

export default class ClassName extends Component {
  render() {
    return (
      <AppStackNavigator/>
    )
  }
}

const AppStackNavigator = createStackNavigator({
  LogIn : { screen: LogIn },
  List: { screen: List },
})
