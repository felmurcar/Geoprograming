import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    Button,
} from 'react-native';


export default class LoginForm extends Component {

    render() {
        return (
            


            <KeyboardAvoidingView behavior="padding" style={styles.container}>

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
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
                    </TouchableOpacity>

                    <Button
                        title="REGISTRARSE AQUI"
                        color='black'
                        onPress={() => this.props.navigation.navigate('RegisterPage')}
                    />

                </View>
            </KeyboardAvoidingView >

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
        margin: 20,
        borderRadius: 20,

    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    }
});
