import {
        StyleSheet
} from 'react-native';

import { buttonColor,scale } from '../constants/appConstants';

var ButtonStyles = StyleSheet.create({
   container : {
       flex : 1,
       marginTop : Math.round(20 * scale)  
   } ,
   caption : {
       color : 'white',
       fontSize : Math.round(20 * scale)  
   },
   captionContainer : {
       backgroundColor : buttonColor,
       alignItems : 'center',
       justifyContent : 'center',
       marginTop : Math.round(20 * scale),
       borderRadius : Math.round(20 * scale),
       padding : Math.round(20 * scale),
       marginLeft :  10,
       marginRight : 10
   }
});

export default ButtonStyles;