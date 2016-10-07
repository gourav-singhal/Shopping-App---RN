import { StyleSheet } from 'react-native';

import { navColor,scale,buttonColor } from '../constants/appConstants';

var styles = StyleSheet.create({
    sectionHeaderOnly : {
        flex : 0.5,
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : 30,
        backgroundColor : navColor,
        justifyContent : 'center'
   },
   header : {
        fontSize : Math.round(28 * scale),
        color : 'white',
        fontWeight : '700',
        padding : 10,
        marginTop : 15,
        alignSelf : 'center'
    },
    sectionButton : {
       flex : 1,
       flexDirection : 'row',
       alignItems : 'center',
       marginTop : 30,
       backgroundColor : navColor,
       justifyContent : 'space-between'
   },
   back : {
       width : Math.round(30 * scale),
       height : Math.round(30 * scale),
       marginLeft : 10
   },
   menu : {
       width : Math.round(30 * scale),
       height : Math.round(30 * scale),
       marginLeft : 10,
       backgroundColor : buttonColor
   },
   whiteText : {
       color : 'white'
   }
});

export default styles;