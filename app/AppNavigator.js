import React from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import Home from './containers/Home';
import Third from './containers/Third';
import Login from './containers/auth/login'
import Directory from './containers/directory/Directory'
import MemberView from './containers/directory/MemberView'
import Tithing from './containers/tithing/Tithing'
import TithingDetails from './containers/tithing/TitheDetails'

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
            key="memberView"
            component={MemberView}
        />
        <Scene
            key="tithing"
            component={Tithing}
        />
        <Scene
            key="tithingView"
            component={TithingDetails}
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
