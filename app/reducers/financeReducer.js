/**
 * Created by robinvarghese on 12/17/17.
 */
const initialState = {
    tithes :[],
    error: null
}

export default function reducer (state=initialState, action){
    switch(action.type){
        case "FETCH_TITHE_FULFILLED": {
            return {...state,tithes:action.payload,error:null}
        }
        case "FETCH_TITHE_REJECTED": {
            return {...state,members:[],error:action.payload}
        }
    }

    return state;
}