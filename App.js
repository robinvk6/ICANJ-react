/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Drawer } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import Sidebar from './src/navigation/sidebar';
import AppHeader from './src/core/appHeader';
import { Container, Header, Content, StyleProvider } from 'native-base';
import Layout from './src/core/layout';
import { Provider } from 'react-redux';
import store from './src/utils/store'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
//https://github.com/learncodeacademy/react-js-tutorials/blob/master/5-redux-react/src/js/actions/tweetsActions.js
// https://www.youtube.com/watch?v=DJ8fR0mZM44
export default class App extends Component {
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }

  render() {

      return (
          <StyleProvider style={getTheme(material)}>
          <Provider store={store}>
              <Layout/>
          </Provider>
          </StyleProvider>
  );
  }
}
