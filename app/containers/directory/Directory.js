import React, {Component} from 'react';
import {connect} from 'react-redux'
import Layout from './../Layout'
import * as MemberActions from './../../actions/memberActions'
import {Container, Content, List, ListItem, Text, Button, Title, CardItem, Body,Icon, Thumbnail, Left,Right} from 'native-base';
import IconContainer from './../common/IconContainer'
import {Actions} from 'react-native-router-flux';

class Directory extends Component {

    componentWillMount() {
        this.props.dispatch(MemberActions.getMembers())
    }

    rowPressed = (member, family) => {
    Actions.memberView({member,family})
    }

    render() {

        return (
            <Layout title="ICANJ Directory">
                <Content>
                    <List dataArray={this.props.directory.members}
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
