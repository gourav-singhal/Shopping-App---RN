import React, { Component } from 'react';
import {
        View,
        Text,
        TextInput,
        TouchableHighlight,
        StyleSheet,
        Image,
        Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');
import {colors,buttonColor,navColor,modalBackgroundColor} from '../constants/appConstants';
import locale from '../locale/index';

class ContactUs extends Component{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <Image style={styles.container}
                source={require('../images/login-bg.png')}>
                <View style={ styles.formContainer}>
                        <TextInput 
                            placeholder={locale.fname} 
                            placeHolderTextColor={colors.placeHolderTextColor} 
                            underlineColorAndroid={colors.underlineColorAndroid} 
                            style={ styles.input } />
                       
                        <TextInput 
                            placeholder={locale.lname} 
                            placeHolderTextColor={colors.placeHolderTextColor} 
                            underlineColorAndroid={colors.underlineColorAndroid}  
                            style={ styles.input } />
                        
                        <TextInput 
                            placeholder={locale.email} 
                            placeHolderTextColor={colors.placeHolderTextColor} 
                            underlineColorAndroid={colors.underlineColorAndroid} 
                            style={ styles.input } />
                            
                         <TouchableHighlight 
                            underlayColor='transparent'
                            >
                                <View style={ styles.submit }>
                                    <Text style={ [styles.whiteText,styles.scale]}> {locale.update} </Text>
                                </View>
                         </TouchableHighlight>
                       
                   </View>
            </Image>
        );
    }
}

const scale = Dimensions.get('window').width / 375;

var styles = StyleSheet.create({
    conatiner : {
        flex : 1,
        width : undefined,
        height : undefined,
        backgroundColor : 'transparent'
    },
     formContainer:{
       flex : 1,
       marginTop : Math.round(20 * scale),
       width : width
    },
    input : {
        marginLeft : 5,
        alignSelf : 'center',
        fontSize : Math.round(20 * scale)
    },
    submit : {
        backgroundColor : buttonColor,
        alignItems : 'center',
        marginTop : Math.round(20 * scale),
        borderRadius : Math.round(20 * scale),
        padding : Math.round(20 * scale),
        marginLeft :  10,
        marginRight : 10
    },
    whiteText : {
        color : 'white'
    },
    scale : {
        fontSize : Math.round(20 * scale)   
    }
});

export default ContactUs;