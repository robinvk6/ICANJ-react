import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
var jwtDecode = require('jwt-decode');

class ICAComponent extends React.Component {

    state = {
        isSessionActive: true,
        isTokenValidationInProgress: false,
    }

    constructor(props,validationRequired){
        super(props)
        validationRequired && this.validateToken(props)
    }

    validateToken = (props) => {
        debugger;
        if(!props.auth || !props.auth.token){
            state = {
                isSessionActive: false,
                isTokenValidationInProgress: true,
            }
            Actions.login()
        }else{
            const token = props.auth.token;
            var decoded = jwtDecode(token);
            var t = new Date(decoded.exp * 1000) - new Date();
            var isValid = (t >= 1800000) ? true : false;
            //isValid = false; Testing Only
            if (isValid) {
                Actions.login();
            }
        }
    }
}

export default ICAComponent