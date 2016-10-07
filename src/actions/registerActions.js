/**
 *  imports
 */
import axios from 'axios';
import {ROOT_URL, API_KEY} from '../constants/actionConstants';

/**
 * constants
 */

export const REGISTER = 'REGISTER';


/**
 *  functions
 */

export function register(registerData)
{
    debugger;
    const url = `${ROOT_URL}/user/register`;
    const response = axios({
        method:'post',
        url: url,
        data: registerData , 
        headers :{
            api_key: API_KEY
          }
     });
    return { 
        type : REGISTER,
        payload : response
    };
}