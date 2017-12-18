/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Drawer } from 'native-base';
import Sidebar from './src/navigation/sidebar';
import AppHeader from './src/core/appHeader';
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
    closeDrawer = () => {
        this.drawer._root.close()
    };

    openDrawer = () => {

        this.drawer._root.open()
    };

  render() {
      return (
          <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<Sidebar/>}
      onClose={() => this.closeDrawer()} >
              <AppHeader
                  openDrawer={this.openDrawer.bind(this)}
              />
  </Drawer>
  );
  }
}
