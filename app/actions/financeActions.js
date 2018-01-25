import GLOBALS from './../config/constants'
import axios from 'axios'


export function getTithe(year){

    return function(dispatch,state) {
        axios({
            method: 'get',
            url: GLOBALS.SERVICES.TITHE+ year,
            headers: {
                'X-Auth-Token': state().jwtauth.auth.token,
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