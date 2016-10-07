import React, { Component } from 'react';

import { 
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

class SplashScreen extends Component{
    render()
    {
        debugger;
        return(
          <View style={ styles.container }>
                <Text style={ styles.welcomeText }>Welcome to React Native</Text>
          </View>  
        );
    }
}

var styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row' ,
        alignItems : 'center',
        justifyContent : 'center'
    },
    welcomeText : {
        fontSize : 20
    }
});

/** export this component */
export default SplashScreen;