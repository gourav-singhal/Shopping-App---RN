import React, { Component } from 'react';

import {
        View,
        TouchableHighlight,
        Image,
        Text
} from 'react-native';

import styles from '../styles/header-styles';

class Header extends Component{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        let content;
        if(this.props.back || this.props.menu)
        {
            content = (
                <View style={ styles.sectionButton }>
                    <TouchableHighlight 
                        underlayColor='transparent'
                        onPress={ this.props.handleNavLeftButtonPress }>
                        <Image 
                            style={this.props.back ? styles.back : styles.menu } 
                            source={this.props.back ? require('../images/leftArrow.png') : require('../images/menu.png')}>
                        </Image>
                    </TouchableHighlight>
                    
                    <Text style={ [ styles.header, styles.whiteText] }>{this.props.caption}</Text>
                    <Text></Text>
                </View>
            );
        }
        else{
            content = (
                <View style={ styles.sectionHeaderOnly }>
                    <Text style={ styles.header }>{ this.props.caption }</Text>
                </View>
            );
        }
        return(
            <View>
                { content }
            </View>
        );
    }
}

export default Header;