import GLOBALS from './../config/constants'
import axios from 'axios'

export function getMembers(){
    return function(dispatch,state){

        var members = axios({
            method: 'get',
            url: GLOBALS.SERVICES.MEMBERS,
            headers: {
                'X-Auth-Token': state().jwtauth.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        var families = axios({
            method: 'get',
            url: GLOBALS.SERVICES.ALL_FAMILIES,
            headers: {
                'X-Auth-Token': state().jwtauth.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        axios.all([members,families]).then(axios.spread(function (res1, res2) {
            dispatch({type:"FETCH_DIRECTORY_FULFILLED", payload: {members:res1.data.data.slice(1,10),families:res2.data.data}})
        }));
    }
}