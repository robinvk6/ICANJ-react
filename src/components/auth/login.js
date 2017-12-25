import React from 'react'
import {
    AppRegistry,
    AsyncStorage,
    View,
    ToolbarAndroid,
    ActivityIndicator
} from 'react-native';
import { Header,Container,Title, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import { connect } from 'react-redux'


import { authenticateUser } from './../../actions/userAuthActions';


class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
        this.props.dispatch(authenticateUser('robinvk6@gmail.com','Testuser1'));

    }

    login = () => {
        this.props.dispatch(authenticateUser(this.state.email,'Testuser1'));
    };

    goToSignup = () => {

    };

    render() {
        const content = this.state.loading ?
            <View>
                <ActivityIndicator size="large"/>
            </View> :
            <Content>
                <List>
                    <ListItem>
                        <InputGroup>
                            <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                            <Input
                                onChangeText={(text) => this.setState({email: text})}
                                value={this.state.email}
                                placeholder={"Email Address"} />
                        </InputGroup>
                    </ListItem>
                    <ListItem>
                        <InputGroup>
                            <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                            <Input
                                onChangeText={(text) => this.setState({password: text})}
                                value={this.state.password}
                                secureTextEntry={true}
                                placeholder={"Password"} />
                        </InputGroup>
                    </ListItem>
                </List>
                <Button rounded light onPress={this.login.bind(this)}>
                    <Text>Light</Text>
                </Button>

            </Content>;

        return (
            <Container>
                <Header>
                    <Title>Login</Title>
                </Header>

                {content}
            </Container>
        );

    }

}

function mapStateToProps(state) {
    return {
        userAuth: state.auth
    };
}

export default connect(mapStateToProps)(Login)