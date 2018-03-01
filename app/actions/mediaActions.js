import GLOBALS from './../config/constants'
import axios from 'axios'


export function getYoutubeVideos(year){

    return function(dispatch,state) {
        axios({
            method: 'get',
            url: GLOBALS.SERVICES.YOUTUBE_VIDEOS,
        })
            .then((response) => {
                dispatch({type: "FETCH_VIDEOS_FULFILLED", payload: response.data.items})
            })
            .catch((err) => {
                dispatch({type: "FETCH_VIDEOS_ERROR", payload: err})
            })
    }
}