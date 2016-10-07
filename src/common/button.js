import React, { Component } from 'react';
import {
        View,
        TouchableHighlight,
        Text
} from 'react-native';

import styles from '../styles/button-styles';
class Button extends Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <View style={ styles.container }>
                <TouchableHighlight 
                    underlayColor='transparent'
                    onPress={this.props.handleButtonPress}>
                    <View style={ styles.captionContainer }>
                        <Text style={styles.caption}> { this.props.caption } </Text> 
                    </View>
                </TouchableHighlight>
            </View>  
        );
    }
}

export default Button;