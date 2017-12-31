import React, {Component} from 'react';
import {connect} from 'react-redux'
import Layout from './../Layout'
import * as MemberActions from './../../actions/memberActions'
import {Container, Content, List, ListItem, Text, Button, Title, CardItem, Body, Thumbnail, Left,Right} from 'native-base';


class Directory extends Component {

    componentWillMount() {
        this.props.dispatch(MemberActions.getMembers())
    }

    render() {

        return (
            <Layout title="ICANJ Directory">
                <Content padder>
                    <List dataArray={this.props.members.members}
                    renderRow={(member) =>
                         <ListItem avatar>
                        <Left>

                        </Left>
                        <Body>
                        <Text>{member.firstName} {member.lastName}</Text>
                        <Text note>Doing what you like will always keep you happy . .</Text>
                        </Body>
                        <Right>
                        <Text note>3:43 pm</Text>
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
        members: state.members
    };
}

export default connect(mapStateToProps)(Directory)
