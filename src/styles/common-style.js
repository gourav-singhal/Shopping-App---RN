/** Imports */

import { StyleSheet } from 'react-native';
import {scale} from '../constants/appConstants'

/** Common styles */
var Common = StyleSheet.create({
    container : {
        flex : 1,
        height : undefined,
        width : undefined,
        backgroundColor : 'transparent'
    },
    error : {
        color : 'red',
        marginLeft : 10,
        fontSize : Math.round(20 * scale)
   },
   whiteText : {
       color : 'white'
   },
   boldText : {
     fontWeight : 'bold'
   },
   input : {
        marginLeft : 5,
        alignSelf : 'center',
        fontSize : Math.round(20 * scale)
    },
    formContainer:{
       flex : 1,
       marginTop : Math.round(20 * scale)
    },
    scale : {
        fontSize : Math.round(20 * scale)   
    },
    underlineText : { 
        textDecorationLine : 'underline'
    }
});

/** export */
export default Common;