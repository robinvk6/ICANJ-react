/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Drawer } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/platform';
import { Container, Header, Content, StyleProvider } from 'native-base';
import Layout from './src/core/layout';
import { Provider } from 'react-redux';
import store from './src/utils/store'

export default class App extends Component {
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }

  render() {

      return (

          <Provider store={store}>
              <StyleProvider style={getTheme(material)}>
              <Layout/>
              </StyleProvider>
          </Provider>

  );
  }
}
