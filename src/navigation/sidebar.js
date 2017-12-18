/**
 * Created by robinvarghese on 12/17/17.
 */
import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

import {Content} from 'native-base';

export default class Sidebar extends Component {
    render() {
        debugger;
        return (
            <Content style={{backgroundColor:'#f1eaff'}}>
    <Text>Drawer</Text>
        </Content>
    );
    }
}

module.exports = Sidebar;