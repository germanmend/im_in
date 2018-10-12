import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation'

import Bookcase from './screens/Bookcase'
import Explore from './screens/Explore'
import AddBook from './screens/AddBook'
import Lists from './screens/Lists'
import Profile from './screens/Profile'

let screen = Dimensions.get('window');

export const createRootNavigator = () => {
  return TabNavigator
    ({
      Bookcase: { screen: Bookcase },
      Explore: { screen: Explore },
      'Add Book': { screen: AddBook }
    },
    {
      tabBarComponent: NavigationComponent,
      tabBarPosition: 'bottom',
      tabBarOptions: {
        bottomNavigationOptions: {
          labelColor: 'white',
          rippleColor: 'white',
          tabs: {
            Bookcase: {
              barBackgroundColor: '#37474F'
            },
            Explore: {
              barBackgroundColor: '#00796B'
            },
            'Add Book': {
              barBackgroundColor: '#EEEEEE',
              labelColor: '#434343', // like in the standalone version, this will override the already specified `labelColor` for this tab
              activeLabelColor: '#212121',
              activeIcon: <Icon size={24} color="#212121" name="newsstand" />
            }
          }
        }
      }
    })
}


/*
export const createRootNavigator = () => {
  return StackNavigator({
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  })
}*/
