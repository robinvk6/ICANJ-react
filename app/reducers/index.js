import { combineReducers } from 'redux';
import first from './first';
import jwtauth from './authenticationReducer'
import directory from './membersReducer'
import finance from './financeReducer'

const rootReducer = combineReducers({
  first, jwtauth, directory, finance
});

export default rootReducer;
