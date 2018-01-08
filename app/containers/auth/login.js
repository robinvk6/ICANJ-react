import React from 'react'
import {
    Image,
} from 'react-native';
import {Header, Container, Title, Content, Form, Item, Label, Input, Icon, Text, Picker, Button} from 'native-base';
import {connect} from 'react-redux'
import styles from './../../styles/styles'

import {authenticateUser} from './../../actions/userAuthActions';

const remote = require('./../../../assets/login.png');

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.props.dispatch(authenticateUser('robinvk6@gmail.com', 'Testuser1'));
    }

    login = () => {
        this.props.dispatch(authenticateUser(this.state.email,this.state.password));
    };

    goToSignup = () => {

    };

    render() {

        return (
            <Container>
                <Content>
                    <Image source={remote} style={styles.backgroundContainer}>
                    </Image>
                    <Form style={styles.mainContainerWithPadding}>
                        <Item rounded>

                            <Input style={styles.lightInput}
                                   onChangeText={(text) => this.setState({email: text})}
                                   value={this.state.email}
                                   placeholder={"Email Address"}/>
                        </Item>
                        <Item rounded style={{marginTop: 20}}>
                            <Input style={styles.lightInput}
                                   onChangeText={(text) => this.setState({password: text})}
                                   value={this.state.password}
                                   secureTextEntry={true}
                                   placeholder={"Password"}/>
                        </Item>
                        <Button block rounded info onPress={this.login.bind(this)} style={{marginTop: 20}}>
                            <Text>Submit</Text>
                        </Button>
                    </Form>


                </Content>
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