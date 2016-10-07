/**
 * Imports
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    DrawerLayoutAndroid,
    Dimensions
} from 'react-native';
/** colors */
import {buttonColor,scale} from '../constants/appConstants';
/** languages */
import locale from '../locale/index';
/** Header */
import Header from '../common/header';
/** Styles */
import HomeStyles from '../styles/common-style';

/** set drawer width */
var {height, width} = Dimensions.get('window');
var drawerWidth = width/2 + 50;

/**
 * navigations start
 */
 
import Contact from '../containers/contactUs';
import Service from '../containers/services';
import Profile from '../containers/profile';
import Orders from '../containers/orders';

/**
 * navigations ends
 */

/** class Home */
class Home extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            isDrawerVisible : false,
            tab : 'services'
        }  
       
        this.handleLogoutPress = this.handleLogoutPress.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }
    
    /**    ******************** render ******************* */
    render()
    {
        var navigationView = (
             <View>
                <View>
                    <Image 
                        style={styles.drawerHeader} 
                        source={require('../images/drawer-header.png')}>
                    </Image>
                </View>
                
                {/** navMenu starts here */}
                <View style={styles.navMenu}>
                    <Text style={[styles.navHeader,{marginBottom : 10}, styles.scaleUserName]}>User Name</Text>
                    
                    <TouchableHighlight 
                        onPress= {this.navigateTo.bind(this,'services')}
                        underlayColor={buttonColor}>
                        <Text style={[styles.navText]}>{locale.allServices}</Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight 
                        onPress={this.navigateTo.bind(this,'profile')}
                        underlayColor={buttonColor}>
                        <Text style={styles.navText}>{locale.myProfile}</Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight 
                        onPress={this.navigateTo.bind(this,'orders')}
                        underlayColor={buttonColor}>
                        <Text style={styles.navText}>{locale.orders}</Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight 
                        onPress={this.navigateTo.bind(this,'contact')}
                        underlayColor={buttonColor}>
                        <Text style={styles.navText}>{locale.contactUs}</Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight 
                        onPress={this.handleLogoutPress}
                        underlayColor={buttonColor}>
                        <Text style={styles.navText}>{locale.logout}</Text>
                    </TouchableHighlight>
                    
                </View>    
                {/** navMenu ends here */} 
            </View> 
        );
        
        return(
            <Image style={ HomeStyles.container } source={ require('../images/login-bg.png')}>
              
                <Header caption={locale.home} menu={true} handleNavLeftButtonPress={this.handleMenuPress.bind(this,this.state.isDrawerVisible)} />
                
                <DrawerLayoutAndroid
                    drawerWidth={drawerWidth}
                    ref={'DRAWER'}
                    drawerPosition={DrawerLayoutAndroid.positions.left}
                    renderNavigationView={()=> navigationView}
                    drawerBackgroundColor={'#1E1F21'}
                    onDrawerClose={this.handleMenuPress.bind(this,true)}> 
                     {this.renderContent()}                    
                </DrawerLayoutAndroid> 
            </Image>
        );
    }
    
    /** toggle drawer */
    handleMenuPress(isDrawerVisible)
    {
        if(!isDrawerVisible)
        {
            this.setState({
                isDrawerVisible : !isDrawerVisible
            });
        
        this.refs['DRAWER'].openDrawer();
        }
        else
        {
            this.setState({
                isDrawerVisible : !isDrawerVisible
            });
             this.refs['DRAWER'].closeDrawer();
        }
    }
    
    /** child views */
    renderContent()
    {
        switch(this.state.tab)
        {
            case 'services' : 
                return( <Service /> );
            case 'profile' : 
                return( <Profile /> );
            case 'orders' : 
                return( <Orders /> );
            case 'contact' : 
                return( <Contact />)
            default : 
                return( <Service /> );
        }
    }
    
    handleLogoutPress()
    {
        this.props.navigator.pop();
    }
    
    /** change child element rendered */
    navigateTo(scene)
    {
        this.refs['DRAWER'].closeDrawer();
        this.setState({tab : scene});
    }
}

/** styles */
var styles = StyleSheet.create({
    navHeader : {
        color : buttonColor,
        fontWeight : 'bold'
    },
    drawerHeader : {
        width : drawerWidth,
        height : Math.round(150 * scale)
    },
    navText : {
        color : 'white',
        fontWeight : 'bold',
        marginBottom : 5,
        fontSize : Math.round(20 * scale)
    },
    scaleUserName : {
        fontSize : Math.round(28 * scale)
    },
   menu : {
       width : Math.round(30 * scale),
       height : Math.round(30 * scale),
       marginLeft : 10,
       backgroundColor : buttonColor
   },
   navMenu : {
       flex : 1,
       flexDirection : 'column',
       alignItems : 'center',
       marginTop : 60
   }
});

/** export  */
export default Home;