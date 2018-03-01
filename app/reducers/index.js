import { combineReducers } from 'redux';
import first from './first';
import jwtauth from './authenticationReducer'
import directory from './membersReducer'
import finance from './financeReducer'
import media from './mediaReducer'

const rootReducer = combineReducers({
  first, jwtauth, directory, finance, media
});

export default rootReducer;
