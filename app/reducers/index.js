import { combineReducers } from 'redux';
import first from './first';
import jwtauth from './authenticationReducer'
import directory from './membersReducer'

const rootReducer = combineReducers({
  first, jwtauth, directory
});

export default rootReducer;
