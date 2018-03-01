import React, {Component} from 'react';
import Layout from './../Layout'
import YouTube from 'react-native-youtube';
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
import {Image,TouchableHighlight} from 'react-native'

export default class VideoRenderer extends Component{

    constructor(props){
        super(props)
    }


    render(){

        return(<Layout title={this.props.track.snippet.title} backEnabled={this.props.navigation}>
            <Content>
                <YouTube
                    videoId={this.props.track.id.videoId}
                    play={true}
                    fullscreen={true}
                    loop={true}
                    apiKey={"AIzaSyCPwYzTdeHFKwxqiKuezOnQp3Cn0K3obh0"}
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}

                    style={{ alignSelf: 'stretch', height: 300 }}
                />
            </Content>
        </Layout>)
    }
}



