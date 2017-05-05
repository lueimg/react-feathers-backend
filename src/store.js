import { applyMiddleware, createStore } from 'redux';
import thunk from  'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import {logger} from 'redux-logger'

const middleware = composeWithDevTools(
    applyMiddleware(
        promise(), 
        thunk,
        logger
    )
);

export default createStore(rootReducer, middleware);