/**
 *  Imports 
 */

import { REGISTER } from '../actions/registerActions';

/** Initial State  */
const INITIAL_STATE = { status : '' }

export default function(state = INITIAL_STATE, action)
{
    debugger;
    switch(action.type)
    {
        case REGISTER : 
            return {
                ...state, status : action.payload.data.Message
            };
        
        default : return state;
    }
}



