import React, {Component} from 'react';
import styles from '../../styles/styles'
import {connect} from 'react-redux'
import Layout from './../Layout'
import {
    Container,
    Content,
    Input,
    Separator,
    ListItem,
    Form,
    Picker,
    H2,
    Item,
    Text,
    ActionSheet,
    Label,
    Button,
    Title,
    Card,
    CardItem,
    Body,
    Icon,
    Thumbnail,
    Spinner,
    Left,
    Right
} from 'native-base';
import {TextInput, View} from 'react-native'
import {createOnlineTransfer} from './../../actions/financeActions'


var BUTTONS = ["Personal Contribution", "Bihar Missions", "Missions and Charity", "Cancel"];
var CANCEL_INDEX = 3;

class OnlinePay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transactionType: BUTTONS[0],
            disabled:true,
            requestInProgress:false
        };
    }

    componentWillReceiveProps(nextProps){
        debugger;
        if(nextProps.finance.transferStatus){
            this.setState({...this.state,requestInProgress:false})
        }
    }

    submitPayment(){
        var transfer = {};
        var metadata = {};
        metadata[this.state.transactionType] = this.state.amount;

        transfer.metadata = metadata;
        transfer.amount=this.state.amount;
        transfer.notes=this.state.notes;

        this.props.dispatch(createOnlineTransfer(transfer))
        this.setState({
            ...this.state,
            requestInProgress:true,
            'disabled' : true
        })
    }


    validate(value){
        if(!isNaN(value) && Number(value) > 1){
            this.setState({
                ...this.state,
                'disabled' : false,
                amount:Number(value)
            })
        }else{
            this.setState({
                ...this.state,
                'disabled' : true
            })
        }

    }


    render() {

        return (
            <Layout title="Online Pay">
                <Content>
                    {this.state.requestInProgress ? <Spinner /> : null}
                    <Card>
                        <CardItem>
                            <Body>
                            <H2>ONLINE TITHE PAYMENT</H2>
                            <Form style={{alignSelf: 'stretch',padding:0}}>
                                <Item stackedLabel>
                                    <Label>TRANSACTION AMOUNT</Label>
                                    <Input keyboardType='numeric' autoFocus={true} onChangeText={(text) => this.validate(text,'amount')}/>
                                </Item>


                                <Item stackedLabel >
                                    <Label>TRANSACTION TYPE</Label>
                                    <Button transparent style={{margin:0,padding:0}} onPress={() =>
                                        ActionSheet.show(
                                            {
                                                options: BUTTONS,
                                                cancelButtonIndex: CANCEL_INDEX,
                                                title: "SELECT TRANSACTION TYPE"
                                            },
                                            buttonIndex => {
                                                if(buttonIndex != 3) {
                                                    this.setState({transactionType: BUTTONS[buttonIndex]})
                                                }
                                            }
                                        )}>
                                        <Text>{this.state.transactionType}</Text>
                                    </Button>
                                </Item>


                                <Item stackedLabel >
                                    <Label>ADDITIONAL NOTES</Label>
                                    <Input numberOfLines={3} onChangeText={(text) => this.setState({...this.state,notes:text})} />
                                </Item>

                                <View style={{marginTop:50,marginBottom:10}}>
                                    <Button info style={{alignSelf: 'flex-end'}} disabled={this.state.disabled} onPress={() => this.submitPayment()}>
                                        <Text>Submit</Text>
                                    </Button>
                                </View>

                                <Item stackedLabel last>
                                    <Text note>ICANJ partners with Dwolla which provides a
                                        free web based software platform that allows users to send,
                                        receive, and request funds from any other user.Dwolla transactions
                                        do not pass sensitive financial information to any recipients,
                                        removing significant information security risk for you and your
                                        transactions.</Text>
                                </Item>
                            </Form>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Layout>)
    }
}

function mapStateToProps(state) {
    return {
        finance: state.finance
    };
}

export default connect(mapStateToProps)(OnlinePay)