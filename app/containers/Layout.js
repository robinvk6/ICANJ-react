import React, { Component } from 'react';
import { StyleProvider, Drawer, Container, Content, Text, Card, Body, Button, Title, CardItem, Header, Left, Right,  Icon } from 'native-base';
import { View } from 'react-native';
import getTheme from './../../native-base-theme/components';
import material from './../../native-base-theme/variables/material';
import Sidebar from './Sidebar';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  closeDrawer() {
    this.drawer._root.close()
  };

  openDrawer() {
    this.drawer._root.open()
  };

  render(){
    return(
        <StyleProvider style={getTheme(material)}>
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar closeDrawer={this.closeDrawer}/>}
        onClose={() => this.closeDrawer()} >
        <Container>
          <Header hasTabs={!!this.props.hasTabs}>
            <Left>
                <View style={{flex: 1, flexDirection: 'row'}}>
              <Button transparent onPress={() => this.openDrawer()}>
                <Icon name='menu' />
              </Button>
                {
                    this.props.backEnabled ? <Button transparent onPress={() => this.props.backEnabled.goBack()}>
                        <Icon name='arrow-back' />
                    </Button> : null
                }
                </View>
            </Left>
            <Body>
              <Title>{ this.props.title }</Title>
            </Body>
              <Right>
                  <Button transparent>
                      <Icon name='bulb' />
                  </Button>
              </Right>
          </Header>
          {this.props.children}
        </Container>
      </Drawer>
        </StyleProvider>
    );
  }
}
