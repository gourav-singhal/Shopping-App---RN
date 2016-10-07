/**
 * Imports
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    Modal,
    Picker
} from 'react-native';
import { reduxForm } from 'redux-form';
import dismissKeyboard from 'dismissKeyboard';
import MultipleChoice from 'react-native-multiple-choice';
import {colors,buttonColor,navColor,modalBackgroundColor,scale} from '../constants/appConstants';
/** languages */
import locale from '../locale/index';
/** Button */
import Button from '../common/button';
/** Header */
import Header from '../common/header';
/** Styles */
import RegisterStyles from '../styles/common-style';
/** actions */
import { register } from '../actions/registerActions';

/** register class */
class Register extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            modalVisible : false,
            categories : [
                'Option 1',
                'Option 2',
                'Option 3',
                'Option 4',
                'Option 5',
                'Option 6',
                'Option 7',
                'Option 8',
                'Option 9',
                'Option 10',
                'Option 11',
                'Option 12'
            ],
          gender : 'male'
        }
        this.handleBackPress = this.handleBackPress.bind(this);
        this.handleRegisterPress = this.handleRegisterPress.bind(this);
    }
    
    /**    ******************** render ******************* */
    render()
    {
        const { fields : {firstName,lastName,password,confirmPassword,email}, handleSubmit, submitting, registerInfo} = this.props;
        return (
             <ScrollView>
                <Image 
                    style={ RegisterStyles.container } 
                    source={ require('../images/login-bg.png')} > 
                    
                    <Header caption={locale.register} back={true} handleNavLeftButtonPress={this.handleBackPress} />
                    
                    {/* formContainer view starts here */}
                    <View style={ RegisterStyles.formContainer}>
                        <TextInput 
                            placeholder={locale.fname} 
                            placeHolderTextColor={colors.placeHolderTextColor} 
                            underlineColorAndroid={colors.underlineColorAndroid} 
                            style={ RegisterStyles.input } {...firstName } />
                        <Text style={RegisterStyles.error}> {firstName.touched ? firstName.error : ''} </Text>
                        
                        <TextInput 
                            placeholder={locale.lname} 
                            placeHolderTextColor={colors.placeHolderTextColor} 
                            underlineColorAndroid={colors.underlineColorAndroid}  
                            style={ RegisterStyles.input } {...lastName } />
                        <Text style={RegisterStyles.error}> {lastName.touched ? lastName.error : ''} </Text>
                        
                        <View style={styles.gender}>
                            <Text style={[RegisterStyles.scale,{ marginLeft : 10, marginRight : 10 }]}>Gender</Text> 
                        </View>
                        
                        <Picker 
                            selectedValue={this.state.gender}
                            onValueChange={(gender) => this.setState({gender})}
                            >
                            <Picker.Item  style={RegisterStyles.scale} label="Male" value="male" />
                            <Picker.Item style={RegisterStyles.scale} label="Female" value="female" />
                        </Picker>
                        
                        
                        <TextInput 
                            placeholder={locale.email} 
                            placeHolderTextColor={colors.placeHolderTextColor} 
                            underlineColorAndroid={colors.underlineColorAndroid} 
                            style={ RegisterStyles.input } {...email } />
                        <Text style={RegisterStyles.error}> {email.touched ? email.error : ''} </Text>
                        
                        <TextInput 
                            placeholder={locale.password} 
                            placeHolderTextColor={colors.placeHolderTextColor} 
                            underlineColorAndroid={colors.underlineColorAndroid} 
                            secureTextEntry={ true } 
                            style={ RegisterStyles.input } {...password } />
                        <Text style={RegisterStyles.error}> {password.touched ? password.error : ''} </Text>
                        
                        <TextInput 
                            placeholder={locale.confirm} 
                            placeHolderTextColor={colors.placeHolderTextColor} 
                            underlineColorAndroid={colors.underlineColorAndroid}
                            secureTextEntry={ true }  
                            style={ RegisterStyles.input } {...confirmPassword } />
                         <Text style={RegisterStyles.error}> {confirmPassword.touched ? confirmPassword.error : ''} </Text>
                         
                         {/** Modal starts here  */}
                         <Modal animated={true}
                                transparent={false}
                                visible={this.state.modalVisible}
                                 onRequestClose={ () => {this._setModalVisible(false)} }>
                                 <View style={[styles.modalContainer]}>
                                    <MultipleChoice
                                        options={this.state.categories}
                                        onSelection={(option)=> {this.onCategorySelection.bind(this,option)}}
                                        style={{flex:3, marginVertical : 5, marginHorizontal : 5}}
                                    />
                                    <Button caption={locale.close} handleButtonPress={this._setModalVisible.bind(this, false)} />
                                 </View>  
                         </Modal>
                         {/** Modal ends here  */}
                         
                         {/** categories start */}
                         <View style={styles.row}>
                            <Text style={[RegisterStyles.scale,{ marginLeft : 10, marginRight : 10 }]}>{locale.category}</Text>
                            <TouchableHighlight onPress={this._setModalVisible.bind(this,true)}
                                underlayColor='transparent'>
                               <Text style={[RegisterStyles.scale,{color : '#444',marginRight : 5}]}> {locale.chooseCategory} </Text>
                            </TouchableHighlight>
                         </View>
                         {/** categories ends */}
                         
                    </View>
                    { /* formContainer view ends here */}
                    
                    { /* buttonContainer view ends here */}
                    <View style={styles.buttonContainer}>
                        <Button caption={locale.register} handleButtonPress={handleSubmit(this.handleRegisterPress)} />
                    </View>
                    { /* buttonContainer view ends here */}
                    
                </Image>
             </ScrollView>
        );
    }
    
    handleRegisterPress(values)
    {
        debugger;
        const registerData = {
            "FirstName": values.firstName,
            "LastName": values.lastName,
            "Email": values.email,
            "Password": values.password,
            "Gender": this.state.gender,
            "Role": "2"
        }
        this.props.register(registerData);
    }
    
    handleBackPress()
    {
        dismissKeyboard();
        this.props.navigator.pop();
    }
    
    _setModalVisible(visible)
    {
        this.setState({
            modalVisible : visible
        });
    }
    
    onCategorySelection(option)
    {
        //add to array logic here --->
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
    
    if(!values.firstName || values.firstName.trim() === '')
	{
		errors.firstName = locale.reqFirstName;
		hasErrors = true;
	}
    
    if(!values.lastName || values.lastName.trim() === '')
	{
		errors.lastName = locale.reqLastName;
		hasErrors = true;
	}
    
	return hasErrors && errors;
}

/** styles */
var styles = StyleSheet.create({
   buttonContainer:{
    marginBottom : 15   
   },
   options : {
     width : Math.round(20 * scale)
    },
    row: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent : 'space-between',
        marginTop : 15
    },
    gender: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent : 'space-between',
        marginTop : 5
    },
    modalContainer : {
      flex : 1 ,
      backgroundColor : modalBackgroundColor,
  },
});

/** returns state of component as props from reducer */
function mapStateToProps()
{
    
}



/** export */
export default reduxForm({
    form : 'RegisterForm',
    fields : ['firstName', 'lastName', 'email', 'password', 'confirmPassword'],
    null,
    null,
    validate
}, null, { register })(Register);