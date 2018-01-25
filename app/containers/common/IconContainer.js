import React, {Component} from 'react';
import {
   View,Text
} from 'react-native';
import styles from './../../styles/styles'
import { H1, H2, H3 } from 'native-base';

const iconContainer = {
    alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        justifyContent: 'center',
        height: 50,
        width: 50
}

const iconColors = {
    1: '#17A598',
    2: '#F3A346',
    3: '#EF551F',
    4: '#542437',
    5: '#08375A',
    6: '#C21120',
    7: '#03263E',
    8: '#D95B43',
    9: '#92B5BF',
    10: '#00515C',
}

class IconContainer extends Component{

    render() {
        const colorIndex = this.props.colorIndex ? this.props.colorIndex : Math.floor(Math.random() * 10) + 1;



        //Set Custom Height & Width
        let overrideiconContainer = {...iconContainer,
            height: this.props.iconSize ? this.props.iconSize : iconContainer.height,
            width: this.props.iconSize ? this.props.iconSize : iconContainer.width,
            borderRadius: this.props.iconSize ? this.props.iconSize/2 : iconContainer.borderRadius,
        }


        return (

            <View style={{
                ...overrideiconContainer,
                backgroundColor: iconColors[colorIndex],
                borderColor: iconColors[colorIndex]
            }}>

                <Text style={{color:'#fff'}}>{this.props.text}</Text>

            </View>)
    }
}

export default IconContainer;