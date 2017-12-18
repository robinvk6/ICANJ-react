/**
 * Created by robinvarghese on 12/17/17.
 */
import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

import {Header,Left,Button,Icon,Right,Body,Title} from 'native-base';

export default class AppHeader extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent
                            onPress={()=>this.props.openDrawer()}
                    >
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                <Title>Home</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='bulb' />
                    </Button>
                </Right>
            </Header>
        );
    }
}

module.exports = AppHeader;