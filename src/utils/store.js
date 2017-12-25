import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import authReducer from "./../reducers/authenticationReducer"

const middleware = applyMiddleware(promise(), thunk, logger)

export default createStore(authReducer, middleware)