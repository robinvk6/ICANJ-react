import React, {Component} from 'react';
import {
    Text, Dimensions, Image, View
} from 'react-native';
import material from './../../native-base-theme/variables/material';
import {Container, Content, Button, List, ListItem, H1, H3} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux'

import styles from './../styles/styles'

const drawerCover = require('./../../assets/cover.jpg');
const drawerImage = require('./../../assets/ICANJ_logo.png');


class Sidebar extends Component {

    constructor(props) {
        super(props)
    }

    navigate = (scene) => {
        this.props.closeDrawer();
        scene();
    }

    render() {
        const welcomeUser = 'Hello ' + this.props.auth.token ? this.props.auth.username : '';

        const loginItem = !this.props.auth.token ?
            <ListItem last onPress={() => this.navigate(Actions.login)}>
                <Text>Login</Text>
            </ListItem> :
            <ListItem last onPress={() => this.navigate(Actions.logout)}>
                <Text>Logout</Text>
            </ListItem>


        return (
            <Container>
                <Content style={{backgroundColor: material.contentBackgroundColor}}>

                    <View style={styles.container}>
                        <View style={styles.backgroundContainer}>
                            <Image source={drawerCover} resizeMode='cover' style={styles.backdrop}/>
                        </View>

                        <View style={styles.overlay}>
                            <Image style={styles.logo} source={drawerImage}/>
                        </View>

                        <View style={styles.headlineContainer}>
                            <Text style={styles.headline}>Welcome</Text>
                            <Text style={styles.title}>{welcomeUser}</Text>
                        </View>
                    </View>

                    <List>
                        <ListItem last onPress={() => this.navigate(Actions.home)}>
                            <Text>Home</Text>
                        </ListItem>
                        <ListItem last onPress={() => this.navigate(Actions.directory)}>
                            <Text>Directory</Text>
                        </ListItem>
                        <ListItem last onPress={() => this.navigate(Actions.tithing)}>
                            <Text>My Tithe</Text>
                        </ListItem>

                        {loginItem}
                    </List>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.jwtauth.auth
    };
}

export default connect(mapStateToProps)(Sidebar)
