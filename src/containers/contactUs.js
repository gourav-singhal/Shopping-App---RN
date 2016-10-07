import React, { Component } from 'react';
import {
        View,
        Text,
        TextInput,
        TouchableHighlight,
        StyleSheet,
        Image,
        Dimensions,
        ScrollView
} from 'react-native';
import {colors,buttonColor,navColor,modalBackgroundColor} from '../constants/appConstants';
import locale from '../locale/index';
import { reduxForm } from 'redux-form';
import dismissKeyboard from 'dismissKeyboard';

const {height, width} = Dimensions.get('window');
class ContactUs extends Component{
    constructor(props)
    {
        super(props);
        this.handleSubmitPress = this.handleSubmitPress.bind(this);
    }
    
    render()
    {
        const { fields : {name,email,phone,message}, handleSubmit, submitting, contactInfo} = this.props;
        return(
            <ScrollView>
                <Image style={styles.container}
                    source={require('../images/login-bg.png')}>
                        <Image style={styles.section}
                            source={require('../images/bottom.jpg')}>
                            <Text style={styles.textContact}>Contact Us</Text> 
                        </Image> 
                        <View style={ styles.formContainer}>
                            <TextInput 
                                    placeholder={locale.fname} 
                                    placeHolderTextColor={colors.placeHolderTextColor} 
                                    underlineColorAndroid={colors.underlineColorAndroid} 
                                    style={ styles.input } {...name} />
                             <Text style={styles.error}> {name.touched ? name.error : ''} </Text>
                            <TextInput 
                                    placeholder={locale.email} 
                                    placeHolderTextColor={colors.placeHolderTextColor} 
                                    underlineColorAndroid={colors.underlineColorAndroid} 
                                    style={ styles.input } {...email} />
                             <Text style={styles.error}> {email.touched ? email.error : ''} </Text>       
                            <TextInput 
                                    placeholder={locale.phone} 
                                    placeHolderTextColor={colors.placeHolderTextColor} 
                                    underlineColorAndroid={colors.underlineColorAndroid} 
                                    style={ styles.input } {...phone}/>
                            <Text style={styles.error}> {phone.touched ? phone.error : ''} </Text>        
                            <TextInput 
                                    placeholder={locale.message} 
                                    placeHolderTextColor={colors.placeHolderTextColor} 
                                    underlineColorAndroid={colors.underlineColorAndroid} 
                                    style={ styles.input } {...message} />
                             <Text style={styles.error}> {message.touched ? message.error : ''} </Text>
                         </View>    
                         <View style={ styles.buttonContainer}>
                             <TouchableHighlight 
                                underlayColor='transparent'
                                onPress={handleSubmit(this.handleSubmitPress)}
                                >
                                <View style={ styles.submit }>
                                    <Text style={ [styles.whiteText,styles.scale]}> {locale.submit} </Text>
                                </View>
                            </TouchableHighlight>
                         </View>       
                </Image>
            </ScrollView>
        );
    }
    
    handleSubmitPress()
    {
        this.props.navigator.push({name : 'home'});
    }
}

function validate(values)
{
	var errors = {};
	var hasErrors = false;
	if(!values.email || values.email.trim() === '')
	{
		errors.email = locale.enterEmail;
		hasErrors = true; 
	}
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
	{
		errors.email = locale.invalidEmail;
		hasErrors = true;
	}
    
    if(!values.name || values.name.trim() === '')
	{
		errors.name = locale.reqName;
		hasErrors = true;
	}
    
    if(!values.phone || values.phone.trim() === '')
	{
		errors.phone = locale.reqPhone;
		hasErrors = true;
	}
    else if(values.phone.length != 10)
    {
		errors.phone = locale.invalidPhone;
		hasErrors = true;
	}
    
    if(!values.message || values.message.trim() === '')
	{
		errors.message = locale.reqMessage;
		hasErrors = true;
	}
    
	return hasErrors && errors;
}

const scale = Dimensions.get('window').width / 375;

var styles = StyleSheet.create({
    conatiner : {
        flex : 1,
        width : undefined,
        height : undefined,
        backgroundColor : 'transparent'
    },
    section : {
        flex : 0.5,
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : navColor,
        justifyContent : 'space-between'
   },
   formContainer:{
       flex : 1,
       marginTop : Math.round(20 * scale),
       width : width
    },
    buttonContainer:{
       flex : 0.5,
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
    },
    textContact : {
        fontWeight : 'bold',
        fontSize : Math.round(28 * scale),
        marginLeft : width/2 - 50
    },
    error : {
        color : 'red',
        marginLeft : 10,
        fontSize : Math.round(20 * scale)
    }
});


export default reduxForm({
    form : 'ContactUsForm',
    fields : ['name', 'email', 'phone', 'message'],
    null,
    null,
    validate
})(ContactUs);