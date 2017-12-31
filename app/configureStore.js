import { createStore, applyMiddleware, compose } from 'redux';
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import rootReducer from './reducers';
import {fetchJWTtoken} from './actions/userAuthActions'

const middleware = applyMiddleware(promise(), thunk, logger)
const store = createStore(rootReducer, compose(middleware))


store.dispatch(fetchJWTtoken())
export default store;
