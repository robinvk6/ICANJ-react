import axios from 'axios'
import GLOBAL from './../config/constants'

export function showLoginPopup() {
    return {
        type: "AUTHENTICATE_USER",
        payload: []
    }
}

export function authenticateUser(username,password) {
    var currentTime = new Date()
    return function(dispatch) {
        dispatch({type: "AUTHENTICATIONG_USER"})
        axios({
            method: 'post',
            url: GLOBAL.SERVICES.AUTH,
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
                dispatch({type: "AUTHENTICATE_USER_FULFILLED", payload: {username,token:response.data,last_logged_in:currentTime}})
            })
            .catch((err) => {
                dispatch({type: "AUTHENTICATE_USER_REJECTED", payload: err})
            })
    }
}