/**
 * Created by robinvarghese on 12/17/17.
 */
export default function reducer (state={
    auth: {
        username: null,
        password: null,
        token: null,
        expiration_date: null
    },
    headerTitle: 'Login',
    fetching: false,
    fetched: false,
    error: null,
}, action){
    switch(action.type){
        case "AUTHENTICATE_USER_FULFILLED": {
            return {...state, fetching: false, fetched: true, headerTitle:'Hi User', auth:action.payload}
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