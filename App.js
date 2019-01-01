/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppNavigator from './screens/mainScreen'
import MainNavigator from './navigation/stacknavigation'
import {ThemeProvider} from 'styled-components/native'
import defaultTheme from './Theme/default'
import {createAppContainer} from 'react-navigation'




export default class App extends Component{
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
          <AppNavigator/>
      </ThemeProvider>
    );
  }
}

const AppContiner = createAppContainer(AppNavigator)

