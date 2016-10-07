import React, { Component } from 'react';
import {
        View,
        Text,
        TextInput,
        TouchableHighlight,
        StyleSheet,
        Image,
        ScrollView,
        Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');
import {buttonColor} from '../constants/appConstants';

class ContactUs extends Component{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
             <ScrollView>
                
                        <View style={styles.serviceContainer}>
                        <Image  style={styles.services}
                        source={require('../images/yoga.jpg')}>
                            <Text style={styles.serviceText}>Yoga Trainer</Text>
                        </Image>
                        <Image style={styles.services}
                        source={require('../images/diet.jpg')}>
                            <Text style={styles.serviceText}>Dietician</Text>
                        </Image>
                        <Image style={styles.services}
                        source={require('../images/guitar_lessons.jpg')}>
                            <Text style={styles.serviceText}>Guitar Lessons</Text>
                        </Image>
                        <Image style={styles.services}
                        source={require('../images/birthday.jpg')}>
                            <Text style={styles.serviceText}>Birthday Party Planners</Text>
                        </Image>
                        <Image style={styles.services}
                        source={require('../images/weddingphotographer.jpg')}>
                            <Text style={styles.serviceText}>Wedding Photographer</Text>
                        </Image>
                        <Image style={styles.services}
                        source={require('../images/salon.jpg')}>
                            <Text style={styles.serviceText}>Salon</Text>
                        </Image>
                      </View>
                
             </ScrollView>
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
    serviceContainer : {
        flexDirection : 'row',
        flexWrap : 'wrap'
    },
    services : {
        width : width/2,
        height : height/2,
        borderWidth : 10,
        borderColor : 'white'
    },
    serviceText : {
        color : buttonColor,
        fontSize : Math.round(28 * scale),
        fontWeight : 'bold',
        marginLeft : 10
    }
});

export default ContactUs;