import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';

export default class Register extends Component {
    render() {
        return (

            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <TextInput
                    placeholder="Nombre Completo"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyLabel="next"
                    onSubmitEditing={() => this.emailInput.focus()}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyLabel="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    ref={(input) => this.emailInput = input}
                />
                <TextInput
                    placeholder="Contraseña"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyLabel="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>REGISTRAR</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    }
});
