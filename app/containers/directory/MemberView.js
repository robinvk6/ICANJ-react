import React, {Component} from 'react';
import Layout from './../Layout';
import {Call,Email,Map} from 'react-native-openanything';
import {TouchableHighlight, Linking, View} from 'react-native'
import {Container,Card, Content, List, ListItem,H2, H3, Label, Item, Text, Button, Title, CardItem, Body,Icon, Thumbnail, Left,Right} from 'native-base';


class MemberView extends Component{

    constructor(props){
        super(props)
    }

    renderIf(condition, content) {
        if (condition) {
            return content;
        } else {
            return null;
        }
    }

        render(){
        return(
            <Layout title="Member" backEnabled={this.props.navigation}>
                    <Content>
                        <Card>
                            <CardItem header>
                                <Text>{this.props.member.firstName} {this.props.member.lastName}</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                {
                                   this.renderIf(this.props.member.cellPhoneNumber,
                                       <Item onPress={() => {
                                           const url = 'telprompt:5551231234';
                                           Linking.canOpenURL(url)
                                               .then((supported) => {
                                                   if (supported) {
                                                       return Linking.openURL(url)
                                                           .catch(() => null);
                                                   }
                                               })
                                               .catch((err) => console.error(err));
                                       }} >

                                               <Label>Phone </Label>
                                               <Text>+1{this.props.member.cellPhoneNumber}</Text>

                                       </Item>)
                                }
                                {
                                    this.renderIf(this.props.member.email,
                                        <Item onPress={() => {
                                            Email(this.props.member.email)
                                        }} >
                                            <Label>
                                                Email Address
                                            </Label>
                                            <Text>{this.props.member.email}</Text>
                                        </Item>)
                                }


                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem header>
                                <Text>Family Contact Details</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Item onPress={() => {Call(this.props.family.homePhoneNumber)}}>
                                <Label>
                                    Home Phone
                                </Label>
                                <Text>
                                    +1{this.props.family.homePhoneNumber}
                                </Text>
                                </Item>
                                <Item onPress={() => {Email(this.props.family.emailAddress)}}>
                                    <Label>
                                        Email Address
                                    </Label>
                                <Text>
                                    {this.props.family.emailAddress}
                                </Text>
                                </Item>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem header>
                                <Text>Address</Text>
                            </CardItem>
                            <CardItem>
                                <Item onPress={() => Map(this.props.family.address.streetAddress+","+this.props.family.address.city+","+this.props.family.address.state) }>
                                <Text>
                                    {this.props.family.address.streetAddress}
                                </Text>
                                <Text>
                                    {this.props.family.address.city}, {this.props.family.address.state}, USA
                                </Text>
                                </Item>
                            </CardItem>
                        </Card>
                    </Content>
            </Layout>
        )
    }
}

export default MemberView;