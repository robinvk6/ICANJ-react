import React, {Component} from 'react';
import {connect} from 'react-redux'
import Layout from './../Layout'
import * as MemberActions from './../../actions/memberActions'
import {Container, Content, Card, Item, List, ListItem,Input,  Text, Button, Title, CardItem, Body,Icon, Thumbnail, Left,Right} from 'native-base';
import IconContainer from './../common/IconContainer'
import {Actions} from 'react-native-router-flux';
import {View} from 'react-native'


class Directory extends Component {

    constructor(props){
        super(props)
        this.filterMember = this.filterMember.bind(this)
        this.state = {
            filteredMembers : []
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({filteredMembers :nextProps.directory.members})
    }

    componentWillMount() {
        this.props.dispatch(MemberActions.getMembers())
    }

    rowPressed = (member, family) => {
    Actions.memberView({member,family})
    }

    filterMember(text){
       let members = this.props.directory.members.filter(member => (member.firstName + member.lastName).includes(text))
        this.setState({filteredMembers :members})
    }

    render() {

        return (
            <Layout title="ICANJ Directory">
                <Content>
                    <View style={{backgroundColor:'#fff', padding:4}}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" onChangeText={this.filterMember} />
                        <Icon name="ios-people" />
                    </Item>
                    </View>

                    <List dataArray={this.state.filteredMembers}
                    renderRow={(member) =>
                         <ListItem avatar last onPress={() => this.rowPressed(member,this.props.directory.families[member.familyId])}>
                        <Left>
                        <IconContainer text={member.firstName.substr(0,1).toUpperCase()+member.lastName.substr(0,1).toUpperCase()} />
                        </Left>
                        <Body>
                        <Text>{member.firstName} {member.lastName}</Text>
                        <Text note>{this.props.directory.families[member.familyId].address.city},{this.props.directory.families[member.familyId].address.state}</Text>
                        </Body>
                        <Right>
                            <Icon name="more" />
                        </Right>
                        </ListItem>
                    }>

                    </List>

                </Content>
            </Layout>
        )

    }
}

function mapStateToProps(state) {
    return {
        directory: state.directory
    };
}

export default connect(mapStateToProps)(Directory)
