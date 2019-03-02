import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
} from 'react-native';

import HomeBar from './HomeBar';

export default class Home extends Component {
   
    render() {
        return (

            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#2196F3"
                    barStyle="light-content"
                />

                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                        source={{ uri: 'https://www.fontventa.com/media/1060/programacion.png' }}
                    />
                    <Text style={styles.title}>GEOPROGRAMING</Text>
                    <Text style={styles.title}>Bienvenido</Text>
                </View>

                <Text style={styles.welcome}>Cargando</Text>

                <View style={styles.cont}>

                    <HomeBar />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    formContainer: {

    },
    logo: {
        width: 250,
        height: 265,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 5,
        textAlign: 'center',
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
    },
    cont: {
        width: '100%',
        height: 40,
    },

});