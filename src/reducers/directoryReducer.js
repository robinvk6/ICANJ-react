/**
 * Created by robinvarghese on 12/17/17.
 */

import axios from "axios";

export default function reducer (state={
    user: {
        id: null,
        name: null,
        age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
}, action){

    switch(action.type){
        case "FETCH_MEMBERS": {
            return function(dispatch) {
                dispatch({type: "FETCH_MEMBERS"});
                debugger;
                axios.get("http://rest.learncode.academy/api/reacttest/tweets")
                    .then((response) => {
                        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
                    })
                    .catch((err) => {
                        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
                    })
            }
            //return {...state, fetching: true}
        }
        case "FETCH_MEMBERS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_MEMBERS_FULFILLED": {
            return {...state, fetching: false, fetched: true, users: action.payload}
        }
    }

    return state;
}