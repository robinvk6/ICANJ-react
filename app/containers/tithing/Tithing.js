import React, {Component} from 'react';
import {connect} from 'react-redux'
import Layout from './../Layout'
import * as FinanceActions from './../../actions/financeActions'
import {
    Container,
    Content,
    List,
    Separator,
    ListItem,
    Form,
    Picker,
    Item,
    Text,
    Button,
    Title,
    Card,
    CardItem,
    Body,
    Icon,
    Thumbnail,
    Left,
    Right
} from 'native-base';
import IconContainer from './../common/IconContainer'
import {Actions} from 'react-native-router-flux';
import GLOBALS from './../../config/constants'
import {View} from 'react-native'

const colorMap = {
    'Dwolla': 1,
    'Check': 2,
    'Cash': 3
}

class TithingSummary extends Component {

    totalTransactions = 0;

    totalAmount = 0;

    transactionMap = {};

    componentWillReceiveProps(nextProps) {

        this.totalTransactions = 0;
        this.totalAmount = 0;
        this.transactionMap = {};
        if (nextProps.tithes) {
            nextProps.tithes.map((tithe) => {
                this.totalTransactions = this.totalTransactions + 1;
                this.totalAmount = this.totalAmount + tithe.amount;
                var that = this;
                tithe.subTransactions.map(function (stithe) {
                    if (!that.transactionMap[stithe.accountType]) {
                        that.transactionMap[stithe.accountType] = 0;
                    }
                    that.transactionMap[stithe.accountType] = that.transactionMap[stithe.accountType] + stithe.amount;
                })
            })
        }

    }

    render() {
        let noContent = (
            <Card>
                <CardItem header>
                    <Text>TRANSACTION SUMMARY</Text>
                    <Right>{this.props.children}</Right>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text>No Transaction found for {this.props.selected1}</Text>
                    </Body>
                </CardItem>
            </Card>);

        let content = this.totalTransactions > 0 ?
            (   <View>
                    <Card>
                        <CardItem header>
                            <Text>TRANSACTION SUMMARY</Text>
                            <Right>{this.props.children}</Right>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                TOTAL CONTRIBUTIONS : ${this.totalAmount}
                            </Text>
                            <Text note>
                                TOTAL TRANSACTIONS : {this.totalTransactions}
                            </Text>
                            <Text note>
                                Tithe Contributions : ${this.transactionMap['Personal Contribution']}
                            </Text>
                            <Text note>
                                Missions $ Charity : ${this.transactionMap['Missions and Charity']}
                            </Text>

                            {
                                this.transactionMap['Bihar Missions'] ?
                                <Text note>
                                Bihar Missions : ${this.transactionMap['Bihar Missions']}
                                </Text> : <Text note>Bihar Missions : $0</Text>

                            }



                            </Body>
                        </CardItem>
                    </Card>
                </View>
            ) : noContent

        return content;
    }
}

class Tithing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected1: GLOBALS.YEAR_DROPDOWN[0]
        };
        this.props.dispatch(FinanceActions.getTithe(this.state.selected1))
    }

    rowPressed = (member, family) => {
        Actions.memberView({member, family})
    }

    onValueChange(value: string) {
        this.props.dispatch(FinanceActions.getTithe(value))
        this.setState({
            selected1: value
        })
    }

    render() {
        let total = 0;
        let rowCount = 0;
        let titheList = (
            <List dataArray={this.props.tithes}
                  renderRow={(tithe) =>

                      <ListItem avatar last>
                          <Left>
                              <IconContainer iconSize={65} colorIndex={colorMap[tithe.paymentType]}
                                             text={'$' + tithe.amount}/>
                          </Left>
                          <Body>
                          <Text>Transaction Amount : ${tithe.amount}</Text>
                          <Text>Check Date : {new Date(tithe.checkDate).toDateString()}</Text>
                          <Text>Payment Type : {tithe.paymentType} </Text>

                          {
                              tithe.subTransactions.map(function (tithe) {
                                  return (
                                      <Text note>
                                          {tithe.accountType} : ${tithe.amount}
                                      </Text>
                                  )
                              })
                          }


                          </Body>
                      </ListItem>
                  }>

            </List>);


        const content = titheList;

        return (
            <Layout title="My Tithe">
                <Content>
                    <Form>

                        <TithingSummary selected1={this.state.selected1} tithes={this.props.tithes}>
                            <Button iconLeft light style={{alignSelf: 'flex-end', margin: 4}}>
                                <Icon name='md-arrow-dropdown'/>
                                <Picker
                                    iosHeader="Select Year"
                                    placeholder="Select Year"
                                    mode="dropdown"
                                    selectedValue={this.state.selected1}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    {
                                        GLOBALS.YEAR_DROPDOWN.map((year) => {

                                            return (<Item label={year} value={year}/>);
                                        })
                                    }
                                </Picker>
                            </Button>
                        </TithingSummary>

                        {content}

                    </Form>


                </Content>
            </Layout>
        )

    }
}

function mapStateToProps(state) {
    return {
        tithes: state.finance.tithes
    };
}

export default connect(mapStateToProps)(Tithing)
