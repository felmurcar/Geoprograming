/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Login from './src/componentes/Login/Login';
import Splash from './src/componentes/Home/Home';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash' };
        console.log('Start doing some tasks for about 3 seconds')
        setTimeout(() => {
            console.log('Done some tasks for about 3 seconds')
            this.setState({ currentScreen: 'Login' })
        }, 4500)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />
        return mainScreen
    }
}
AppRegistry.registerComponent('Formulario_Registro', () => Main);

