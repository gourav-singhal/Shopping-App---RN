/** import statements */

import React, { Component } from 'react';
import {
        View,
        Image,
        TouchableHighlight,
        Text,
        Dimensions,
        StyleSheet,
        TextInput,  
} from 'react-native';
import { reduxForm } from 'redux-form';
/** dismiss keyboard native function  */
import dismissKeyboard from 'dismissKeyboard';
/** colors */
import {colors,buttonColor,navColor,scale} from '../constants/appConstants';
/** languages */
import locale from '../locale/index';
/** button component */
import Button from '../common/button';
/** Header */
import Header from '../common/header';
/** Styles */
import LoginStyles from '../styles/common-style';

/** Login Class  */
class Login extends Component{
    constructor(props)
    {
        super(props);
        this.handleSignUpPress = this.handleSignUpPress.bind(this); 
        this.handleForgotPasswordPress = this.handleForgotPasswordPress.bind(this);
        this.handleSigninPress = this.handleSigninPress.bind(this);
    }
    
    /**    ******************** render ******************* */
    render()
    {
        const { fields : { email, password }, handleSubmit, submitting, loginInfo } = this.props;
        return(
          <Image style={ LoginStyles.container } source={ require('../images/login-bg.png')}>
          
           <Header caption={locale.login} />
            
            {/* formContainer view starts here */}
            <View style={ LoginStyles.formContainer }>
                <TextInput 
                    placeholder={locale.email} 
                    keyboardType='email-address' 
                    placeHolderTextColor={colors.placeHolderTextColor} 
                    underlineColorAndroid={colors.underlineColorAndroid} 
                    style={ LoginStyles.input } {...email } />
                <Text style={LoginStyles.error}> {email.touched ? email.error : ''} </Text>
                
                <TextInput 
                    placeholder={locale.password} 
                    placeHolderTextColor={colors.placeHolderTextColor} 
                    underlineColorAndroid={colors.underlineColorAndroid} 
                    secureTextEntry={ true } 
                    style={ LoginStyles.input } {...password } />
                <Text style={LoginStyles.error}> {password.touched ? password.error : ''} </Text>
                
               </View>
               {/* formContainer view ends here */}
               
               {/* forgotLink view starts here */}
               <View style={ styles.forgotLink }>
                 <TouchableHighlight 
                    underlayColor='transparent' onPress={this.handleForgotPasswordPress}>
                    <Text style={ [ LoginStyles.boldText, LoginStyles.underlineText,LoginStyles.scale ] } > {locale.forgot} </Text>
                 </TouchableHighlight>
               </View>
                {/* forgotLink view ends here */}
                
               <Button handleButtonPress={handleSubmit(this.handleSigninPress)} caption={locale.signin} />
               
               {/* signUp view starts here */}
               <View style={ [styles.signUp] }>
                   <View>
                     <Text style={ LoginStyles.scale }> {locale.noaccount}</Text>
                   </View>
                  <TouchableHighlight 
                    underlayColor='transparent'
                    onPress={this.handleSignUpPress} >
                    <Text style={ [LoginStyles.boldText, LoginStyles.scale] }> {locale.signup} </Text>
                  </TouchableHighlight>
               </View>
                {/* signUp view ends here */}
          </Image>
        );
    }
    
    handleSigninPress()
    {
        dismissKeyboard();  
        this.props.navigator.push({name : 'home'});
    }
    
    handleSignUpPress() 
    {
        this.props.navigator.push({ name : 'register'});
    }
    
    handleForgotPasswordPress()
    {
        this.props.navigator.push({ name : 'forgot'});
    }
}


/** Validate function redux */
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
		errors.email = locale.inValidEmail;
		hasErrors = true;
	}
	
	if(!values.password || values.password.trim() === '')
	{
		errors.password = locale.enterPassword;
		hasErrors = true;
	}
    
	return hasErrors && errors;
}

/** styles  */
var styles = StyleSheet.create({
    signUp : {
        justifyContent : 'center',
        marginTop : 10,
        marginBottom  : 20,
        flexDirection : 'row'
    },
    forgotLink : {
        marginTop : 25,
        alignItems : 'flex-end'
    }
});


/** export this module */

export default reduxForm({
	form : 'LoginForm',
	fields : ['email','password'],
	null,
	null,
	validate
},null,null)(Login);