/** Main Component ---> Routes are defined here */
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Navigator
} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

/** Import All components here */
import SplashScreen from '../components/splashScreen';
import Login from './login';
import Register from './register';
import ForgotPassword from './forgotPassword';
import ChangePassword from './changePassword';
import Home from '../components/home';
import ContactUs from './contactUs';

/** Routes */
var ROUTES = {
    splashscreen : SplashScreen,
    login : Login,
    register : Register,
    forgot : ForgotPassword,
    changePassword : ChangePassword,
    home : Home,
    contact : ContactUs
}

class Main extends Component {
    renderScene(route, navigator) {
        var Component = ROUTES[route.name];
        return <Component route={ route } navigator={ navigator } />;
    }

    render() {
        return (
            <Provider store={store}>
                <Navigator
                    style={ styles.container }
                    initialRoute={{name : 'splashscreen'}}
                    renderScene={ this.renderScene }
                    configureScene={(route) => ({
                                    ...Navigator.SceneConfigs.HorizontalSwipeJump,
                                    gestures: false
                                })}
                 />
            </Provider>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

/** Export this component */
export default Main;