import React, {Component} from 'react';
var ReactNative = require('react-native');
import { connect } from 'react-redux'
import {Container, Content, Text, Card, Body, Button, Title, CardItem, Spinner} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Layout from './Layout';


import { validateToken } from './../actions/userAuthActions';

var {
    AsyncStorage,
} = ReactNative;

class Home extends React.Component {


    state = {
        isSessionActive: true,
        isTokenValidationInProgress: false,
    }

    constructor(props) {
        super(props)
    }

    render() {
        if(this.state.isSessionActive && !this.state.isTokenValidationInProgress ){
            return (
                <Layout title="first page">
                    <Content padder>
                        <Card>
                            <CardItem>
                                <Body>
                                <Text>
                                    This is Page One, Press button to goto page two
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Button dark bordered style={{alignSelf: 'center', margin: 30}}
                                onPress={() => {
                                    Actions.second();
                                }}>
                            <Text>Goto Page 2</Text>
                        </Button>
                        <Button dark bordered style={{alignSelf: 'center', margin: 30}}
                                onPress={() => {
                                    Actions.third();
                                }}>
                            <Text>Goto Page 3</Text>
                        </Button>
                    </Content>
                </Layout>
            );
        }else{
            return (<Text>Loading..........</Text>)
        }
    }
}

function mapStateToProps(state) {
    return {
        directory: state.first,
        auth: state.jwtauth.auth
    };
}

export default connect(mapStateToProps)(Home)
