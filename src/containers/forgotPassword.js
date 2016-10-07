/**
 * Imports
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import {reduxForm} from 'redux-form';
import dismissKeyboard from 'dismissKeyboard';
/** colors */
import {colors,buttonColor,navColor,scale} from '../constants/appConstants';
/** languages */
import locale from '../locale/index';
/** Button  */
import Button from '../common/button';
/** Header */
import Header from '../common/header';
/** Styles */
import ForgotStyles from '../styles/common-style';

/** ForgotPassword class */
class ForgotPassword extends Component
{
    constructor(props)
    {
        super(props);
        this.handleBackPress = this.handleBackPress.bind(this);
        this.handleSubmitPress = this.handleSubmitPress.bind(this);
    }
    
    /**    ******************** render ******************* */
    render()
    {
        const { fields:{ email }, handleSubmit, submitting, forgotPasswordInfo } = this.props;
        return(
          <Image style={ ForgotStyles.container } source={ require('../images/login-bg.png')}>
          
                <Header caption={locale.forgotTitle} back={true} handleNavLeftButtonPress={this.handleBackPress} />
                
                {/* formContainer View starts here */}
                <View style={ ForgotStyles.formContainer }>
                    <TextInput 
                        placeholder={locale.regID} 
                        keyboardType='email-address' 
                        placeHolderTextColor={colors.placeHolderTextColor} 
                        underlineColorAndroid={colors.underlineColorAndroid} 
                        style={ ForgotStyles.input } {...email } />
                    <Text style={ForgotStyles.error}> {email.touched ? email.error : ''} </Text>
                </View>
                {/* formContainer View ends here */}
                
                 <Button caption={locale.submit} handleButtonPress={handleSubmit(this.handleSubmitPress)} />

                 <View style={ ForgotStyles.formContainer }></View>
               
          </Image> 
        );
    }
    
    handleBackPress()
    {
        dismissKeyboard();
        this.props.navigator.pop();
    }
    
    handleSubmitPress()
    {
        dismissKeyboard();
        this.props.navigator.push({ name : 'changePassword'});
    }
}

/** validate redux */
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
    
    return hasErrors && errors;
}

/** styles */
var styles = StyleSheet.create({
    
});

/** export */
export default reduxForm({
   form : 'ForgotForm',
   fields : ['email'],
   null,
   null,
   validate 
},null,null)(ForgotPassword);