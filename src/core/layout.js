import React from 'react'
import { connect } from 'react-redux'
import { Container, Header, Content, Drawer } from 'native-base';
import Sidebar from './../navigation/sidebar';
import AppHeader from './../core/appHeader';
import Login from './../components/auth/login'
import { Router, Scene } from 'react-native-router-flux';


import Directory from './../components/directory/directory'
import {
    NavigationExperimental,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { authenticateUser } from './../actions/userAuthActions';

const RouterWithRedux = connect()(Router);

class Layout extends React.Component {

    constructor(props){
        super(props)
    }

    closeDrawer = () => {
        this.drawer._root.close()
    };

    openDrawer = () => {

        this.drawer._root.open()
    };

    render() {
        if(this.props.userAuth.token){
            return (
                <RouterWithRedux>
                        <Scene key="root">
                            <Scene key="home" component={Directory} hideNavBar initial={true} />
                            <Scene key="header" component={Directory} />
                        </Scene>
                </RouterWithRedux>)
        }else{
            return (
            <Login/>
            )
        }


    }

}

function mapStateToProps(state) {
    return {
        userAuth: state.auth
    };
}

export default connect(mapStateToProps)(Layout)