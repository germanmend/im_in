import React, { Component } from 'react'
import { Dimensions, Text, View, StyleSheet } from 'react-native'
import SideSwipe from 'react-native-sideswipe'

import { Item } from './item';

const { width } = Dimensions.get('window');

const data = [{name: 'asdasd'}, {name: 'name'}]

export default class PokemonList extends Component {
  state = {
    currentIndex: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Pokedex.
        </Text>
        <SideSwipe
            data={ data }
            style={{ flex: 1, width }}
            itemWidth={Item.WIDTH}
            threshold={Item.WIDTH / 4}
            extractKey={item => item.name}
            contentOffset={24}
            useNativeDriver={false}
            onIndexChange={index =>
              this.setState(() => ({ currentIndex: index }))}
            renderItem={({ item, ...rest }) => (
              <CarouselItem
                {...rest}
                {...item}
                navigation={this.props.navigation}
              />
            )}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagline: {
    margin: 24,
    fontSize: 32,
    fontFamily: 'light',
    color: 'black',
    letterSpacing: 1.2,
  },
  title: {
    margin: 24,
    fontSize: 32,
    fontFamily: 'regular',
    color: 'black',
    letterSpacing: 1.2,
  },
});
