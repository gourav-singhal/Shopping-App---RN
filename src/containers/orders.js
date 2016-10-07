import React, { Component } from 'react';
import {
        View,
        Text,
        TextInput,
        TouchableHighlight,
        StyleSheet,
        Image
} from 'react-native';

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
                <Text>This is orders screen</Text>
            </Image>
        );
    }
}

var styles = StyleSheet.create({
    conatiner : {
        flex : 1,
        width : undefined,
        height : undefined,
        backgroundColor : 'transparent'
    }
});

export default ContactUs;