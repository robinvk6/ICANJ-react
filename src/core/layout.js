import React from 'react'
import { connect } from 'react-redux'
import { Container, Header, Content, Drawer } from 'native-base';
import Sidebar from './../navigation/sidebar';
import AppHeader from './../core/appHeader';
import Login from './../components/auth/login'
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { authenticateUser } from './../actions/userAuthActions';


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
                <Drawer
                ref={(ref) => {
                    this.drawer = ref;
                }}
                content={<Sidebar/>}
                onClose={() => this.closeDrawer()}>
                <AppHeader
                    openDrawer={this.openDrawer.bind(this)}
                    title={this.props.userAuth.username}
                />
            </Drawer>)
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