import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, Text } from 'react-native';
import RegisterForm from './RegisterForm';


export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                        source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/programador-png-4.png' }}
                    />
                    <Text style={styles.title}>GEOPROGRAMING</Text>
                    <Text style={styles.title}>Registro</Text>
                </View>
                <View style={styles.formContainer}>
                    <RegisterForm />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00BCD4'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    formContainer: {

    },
    logo: {
        width: 110,
        height: 140,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 5,
        textAlign: 'center',
    }

});
