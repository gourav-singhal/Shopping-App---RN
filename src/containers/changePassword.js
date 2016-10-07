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
import ChangeStyles from '../styles/common-style';

/** class ChangePassword */
class ChangePassword extends Component
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
        const { fields : { password, confirmPassword, otp }, handleSubmit, submitting, ChangePasswordInfo } = this.props;
        return(
          <Image style={ ChangeStyles.container } source={ require('../images/login-bg.png')}>

                <Header caption={locale.changePwd} back={true} handleNavLeftButtonPress={this.handleBackPress} />
                
                {/* formContainer View starts here */}
                <View style={ styles.formContainer }>
                
                        <TextInput 
                            placeholder={locale.password}
                            placeHolderTextColor={colors.placeHolderTextColor} 
                            underlineColorAndroid={colors.underlineColorAndroid}
                            secureTextEntry={ true } 
                            style={ ChangeStyles.input } {...password } />
                        <Text style={ChangeStyles.error}> {password.touched ? password.error : ''} </Text>
                        
                        <TextInput 
                            placeholder={locale.confirm} 
                            placeHolderTextColor={colors.placeHolderTextColor} 
                            underlineColorAndroid={colors.underlineColorAndroid}
                            secureTextEntry={ true }  
                            style={ ChangeStyles.input } {...confirmPassword } />
                         <Text style={ChangeStyles.error}> {confirmPassword.touched ? confirmPassword.error : ''} </Text>
                         
                         <TextInput 
                            placeholder={locale.otp}
                            placeHolderTextColor={colors.placeHolderTextColor} 
                            underlineColorAndroid={colors.underlineColorAndroid}
                            style={ ChangeStyles.input } {...otp } />
                         <Text style={ChangeStyles.error}> {otp.touched ? otp.error : ''} </Text>
                         
                </View>
                {/* formContainer View ends here */}
                
               <Button caption={locale.submit} handleButtonPress={handleSubmit(this.handleSubmitPress)} />
               
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
        console.log('Inside Change password submit');
    }
}

/** validate redux */
function validate(values)
{
    var errors = {};
	var hasErrors = false;
    if(!values.password || values.password.trim() === '')
	{
		errors.password = locale.enterPassword;
		hasErrors = true;
	}
    
    if(!values.confirmPassword || values.confirmPassword.trim() === '')
	{
		errors.confirmPassword = locale.enterPassword;
		hasErrors = true;
	}
    else if(values.password != values.confirmPassword)
    {
        errors.confirmPassword = locale.passwordNotMatch;
		hasErrors = true;
    }
    
     if(!values.otp || values.otp.trim() === '')
	{
		errors.otp = locale.enterOtp;
		hasErrors = true;
	}
    
    return hasErrors && errors;
}

var styles = StyleSheet.create({
    formContainer : {
        flex : 2,
        marginTop : Math.round(20 * scale)
    }
});

export default reduxForm({
    form : 'ChangePasswordForm',
    fields : ['password', 'confirmPassword', 'otp'],
    null,
    null,
    validate
},null,null)(ChangePassword);