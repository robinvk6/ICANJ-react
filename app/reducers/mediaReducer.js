/**
 * Created by robinvarghese on 12/17/17.
 */
const initialState = {
    videos:[],
    error:null
}

export default function reducer (state=initialState, action){
    switch(action.type){
        case "FETCH_VIDEOS_FULFILLED": {
            return {...state,videos:action.payload,error:null}
        }
        case "FETCH_VIDEOS_ERROR": {
            return {...state,videos:[],error:action.payload}
        }
    }

    return state;
}