/**
 * Created by robinvarghese on 12/17/17.
 */

const initialState = {
    token : null,
    jwtTokenDecoded : null,
    currentUser: null
}


const reducer = (state=initialState, action) => {

    switch(action.type){
        case "AUTHENTICATED_USER_TOKEN": {
            let auth = state.auth;
            auth.token = action.payload;
            return {...state,auth:action.payload}
        }
        case "AUTHENTICATED_USERNAME": {
            return {...state,auth:action.payload}
        }
        case "GET_USER_TOKEN": {
            return {...state}
        }
        case "AUTHENTICATE_USER_FULFILLED": {
            return {...state,
                token:action.payload.token.token,
                jwtTokenDecoded:action.payload.jwtToken,
                currentUser:action.payload.token.member
            }
        }
        case "FETCH_MEMBERS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_MEMBERS_FULFILLED": {
            return {...state, fetching: false, fetched: true, users: action.payload}
        }
    }

    return state
}

export default reducer