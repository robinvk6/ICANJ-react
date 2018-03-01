import GLOBALS from './../config/constants'
import axios from 'axios'


export function getTithe(year){

    return function(dispatch,state) {
        axios({
            method: 'get',
            url: GLOBALS.SERVICES.TITHE+ year,
            headers: {
                'X-Auth-Token': state().jwtauth.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                dispatch({type: "FETCH_TITHE_FULFILLED", payload: response.data.data})
            })
            .catch((err) => {
                dispatch({type: "AUTHENTICATE_USER_REJECTED", payload: err})
            })
    }
}

export function getOnlinePayEligibility(){
    return function(dispatch,state) {
        axios({
            method: 'get',
            url: GLOBALS.SERVICES.IS_USER_ONLINEPAY_ELIGIBLE,
            headers: {
                'X-Auth-Token': state().jwtauth.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                dispatch({type: "FETCH_ONLINE_PAY_ELIGIBILITY_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "ONLINE_PAY_ELIGIBILITY_REJECTED", payload: err})
            })
    }
}

export function createOnlineTransfer(payment){
    return function(dispatch,state) {
        axios({
            method: 'post',
            url: GLOBALS.SERVICES.CREATE_TRANSFER,
            headers: {
                'X-Auth-Token': state().jwtauth.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: payment
        })
            .then((response) => {
                dispatch({type: "ONLINE_PAY_TRANSFER_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "ONLINE_PAY_TRANSFER_REJECTED", payload: err})
            })
    }
}