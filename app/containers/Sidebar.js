import React, {Component} from 'react';
import {
    Text, Dimensions, Image, View
} from 'react-native';
import material from './../../native-base-theme/variables/material';
import {Container, Content, Button, List, ListItem, H1, H3,Separator, Body} from 'native-base';
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

    getGuestMenu() {
        return (<List>
            <ListItem last onPress={() => this.navigate(Actions.home)}>
                <Text>Home</Text>
            </ListItem>


            <Separator bordered>
                <Text>RESOURCES</Text>
            </Separator>
            <ListItem last onPress={() => this.navigate(Actions.youtube)}>
                <Text>Videos</Text>
            </ListItem>

            <ListItem last onPress={() => this.navigate(Actions.login)}>
                <Text>Login</Text>
            </ListItem>

        </List>)
    }

    getLoggedInMenu() {
        return (<List>
            <ListItem last onPress={() => this.navigate(Actions.home)}>
                <Text>Home</Text>
            </ListItem>

            <Separator bordered>
                <Text>DIRECTORY</Text>
            </Separator>
            <ListItem last onPress={() => this.navigate(Actions.directory)}>
                <Text>Directory</Text>
            </ListItem>

            <Separator bordered>
                <Text>FINANCE</Text>
            </Separator>
            <ListItem last onPress={() => this.navigate(Actions.tithing)}>
                <Text>My Tithe</Text>
            </ListItem>
            <ListItem last onPress={() => this.navigate(Actions.onlinePay)}>
                <Text>Online Pay</Text>
            </ListItem>

            <Separator bordered>
                <Text>RESOURCES</Text>
            </Separator>
            <ListItem last onPress={() => this.navigate(Actions.youtube)}>
                <Text>Videos</Text>
            </ListItem>

            <Separator bordered>
                <Text>PROFILE</Text>
            </Separator>
            <ListItem last onPress={() => this.navigate(Actions.youtube)}>
                <Text>Update Profile</Text>
            </ListItem>
            <ListItem last onPress={() => this.navigate(Actions.youtube)}>
                <Text>Update Address</Text>
            </ListItem>
            <ListItem last onPress={() => this.navigate(Actions.login)}>
                <Text>Logout</Text>
            </ListItem>

        </List>)
    }

    render() {
        const welcomeUser = this.props.auth.token ? this.props.auth.currentUser.firstName +" "+ this.props.auth.currentUser.lastName : '';

        var content = this.props.auth.token ? this.getLoggedInMenu() : this.getGuestMenu();

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
                    {content}
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.jwtauth,
        finance: state.finance
    };
}

export default connect(mapStateToProps)(Sidebar)
