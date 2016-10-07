import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import register from './registerReducer';

const rootReducer = combineReducers({
     form : formReducer,
     register
});

/** export this module */
export default rootReducer;