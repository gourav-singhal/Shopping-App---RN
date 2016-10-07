import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger, promise, thunk)(createStore);

export default function  configureStore(initialState){
    const store =  createStoreWithMiddleware(rootReducer, initialState);
    return store;
}
