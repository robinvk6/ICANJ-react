import axios from 'axios'
import {Actions} from 'react-native-router-flux';
var ReactNative = require('react-native');
var {
    AsyncStorage,
} = ReactNative;
import GLOBALS from './../config/constants'
var jwtDecode = require('jwt-decode');


function _onValueChange(item, selectedValue) {
    try {
        AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
    }
}

export function fetchJWTtoken () {
    return function(dispatch){
        AsyncStorage.getItem(GLOBALS.CONSTANTS.STORAGE_KEY).then((token) => {
            dispatch ({type: "AUTHENTICATED_USER_TOKEN", payload: {auth: {token}}})
        });
        AsyncStorage.getItem(GLOBALS.CONSTANTS.ICANJ_USERNAME).then((username) => {
            dispatch ({type: "AUTHENTICATED_USERNAME", payload: {auth: {username}}})
        });
    }

}

export function authenticateUser(username,password) {
    var currentTime = new Date()
    return function(dispatch) {
        dispatch({type: "AUTHENTICATING_USER"})
        axios({
            method: 'post',
            url: GLOBALS.SERVICES.AUTH,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                username: username,
                password: password
            }
        })
            .then((response) => {
                var decoded = jwtDecode(response.data.token);
                _onValueChange(GLOBALS.CONSTANTS.STORAGE_KEY, response.data.token);
                _onValueChange(GLOBALS.CONSTANTS.ICANJ_USERNAME, username);
                dispatch({type: "AUTHENTICATE_USER_FULFILLED", payload: {username,token:response.data.token,last_logged_in:currentTime,jwtToken:decoded}})
                Actions.home()
            })
            .catch((err) => {
                dispatch({type: "AUTHENTICATE_USER_REJECTED", payload: err})
            })
    }
}