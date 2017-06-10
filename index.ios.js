'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import SearchPage from './SearchPage'

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <NavigatorIOS 
        style = {styles.container}
        initialRoute={{
        title: 'PropertyFinder',
        component: SearchPage
      }}/>
    );
  }
}

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container:{
    flex:1,
    backgroundColor:'white'
  }
});

AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
