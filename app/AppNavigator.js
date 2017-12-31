import React from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import Home from './containers/Home';
import Second from './containers/Second';
import Third from './containers/Third';
import Login from './containers/auth/login'
import Directory from './containers/directory/Directory'

const RouterWithRedux = connect()(Router);

const AppNavigator = () => (
  <RouterWithRedux>
    <Scene hideNavBar>
      <Scene
        key="home"
        component={Home}

      />
      <Scene
        key="directory"
        component={Directory}
      />
      <Scene
        key="third"
        component={Third}
      />
        <Scene
            key="login"
            component={Login}
            initial
        />
    </Scene>
  </RouterWithRedux>
);

export default AppNavigator;
