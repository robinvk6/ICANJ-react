/**
 * Created by robinvarghese on 12/17/17.
 */
const initialState = {
    members :[],
    families : [],
    error: null
}

export default function reducer (state=initialState, action){
    switch(action.type){
        case "FETCH_DIRECTORY_FULFILLED": {
            return {...state,members:action.payload.members,families:action.payload.families,error:null}
        }
        case "FETCH_MEMBERS_REJECTED": {
            return {...state,members:[],error:action.payload}
        }
        case "FETCH_MEMBERS_FULFILLED": {
            return {...state, fetching: false, fetched: true, users: action.payload}
        }
    }

    return state;
}