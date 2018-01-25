import React, {Component} from 'react';
import Layout from './../Layout'
import {Container,Card, Content, List, ListItem, Text, Button, Title, CardItem, Body,Icon, Thumbnail, Left,Right} from 'native-base';


class MemberView extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Layout title="Member">
                    <Content>
                        <Card>
                            <CardItem header>
                                <Text>{this.props.member.firstName} {this.props.member.lastName}</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text>
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem header>
                                <Text>Other Contact Details</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text>
                                    Home Phone : {this.props.family.homePhoneNumber}
                                </Text>
                                <Text>
                                    Email Address : {this.props.family.emailAddress}
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem header>
                                <Text>Address</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text>
                                    {this.props.family.address.streetAddress}
                                </Text>
                                <Text>
                                    {this.props.family.address.city}, {this.props.family.address.state}, USA
                                </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                                <Button iconLeft info rounded onPress={() => {
                                    debugger;
                                    this.props.navigation.goBack()
                                }}>
                                    <Icon name='arrow-back' />
                                    <Text>Back</Text>
                                </Button>
                            </CardItem>
                        </Card>
                    </Content>
            </Layout>
        )
    }
}

export default MemberView;