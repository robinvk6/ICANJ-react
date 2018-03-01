/**
 * Created by robinvarghese on 12/17/17.
 */
const initialState = {
    tithes :[],
    isOnlinePayEligible: false,
    transferStatus: false,
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
        case "FETCH_ONLINE_PAY_ELIGIBILITY_FULFILLED" : {
            return {...state,isOnlinePayEligible:action.payload.success}
        }
        case "ONLINE_PAY_TRANSFER_FULFILLED" : {
            debugger;
            return {...state,transferStatus:true}
        }
    }

    return state;
}