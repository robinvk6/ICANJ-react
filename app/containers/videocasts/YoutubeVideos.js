import React, {Component} from 'react';
import {connect} from 'react-redux'
import Layout from './../Layout'
import * as MediaActions from './../../actions/mediaActions'
import {Actions} from 'react-native-router-flux';
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
import GLOBALS from './../../config/constants'
import {Image,TouchableHighlight} from 'react-native'

class YoutubeVideos extends Component{

    constructor(props){
        super(props)
        this.props.dispatch(MediaActions.getYoutubeVideos())
    }

    rowPressed = (track) => {
        Actions.youtubeRenderer({track});
    }

    render(){

        return(<Layout title="Worship & Word">
            <Content>
                <List dataArray={this.props.media.videos}
                      renderRow={(record) =>
                          <TouchableHighlight onPress={() => this.rowPressed(record)} underlayColor='#FFF'>
                          <Card>

                              <CardItem>
                                  <Left>
                                      <Thumbnail source={{uri: record.snippet.thumbnails.high.url}} />
                                      <Body>
                                      <Text>{record.snippet.title}</Text>
                                      </Body>
                                  </Left>
                              </CardItem>
                              <CardItem cardBody>
                                  <Body style={{justifyContent: 'center',
                                      alignItems: 'center',}}>
                                  <Image
                                      style={{width: 360, height: 240}}
                                      source={{uri: record.snippet.thumbnails.high.url}}
                                  />
                                  </Body>
                              </CardItem>
                              <CardItem>
                                  <Left>

                                  </Left>
                                  <Body>
                                  </Body>
                                  <Right>
                                      <Text note>{record.snippet.publishedAt.split("T")[0]}</Text>
                                  </Right>
                              </CardItem>
                          </Card>
                          </TouchableHighlight>
                      }>

                </List>


            </Content>
        </Layout>)
    }
}

function mapStateToProps(state) {
    return {
        media: state.media
    };
}

export default connect(mapStateToProps)(YoutubeVideos)


