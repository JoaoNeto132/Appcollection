import React, { useState, useEffect, useRef } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Keyboard, Button, FlatList, ActivityIndicator, separator
} from 'react-native';
import { TextInput } from 'react-native-paper';
import firebase from '../../services/connectionFirebase';

const Separator = () => {
    return <View style={styles.separator} />;
}

export default function GerenciarPerfil() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [endereco, setEndereco] = useState('');
    const [key, setKey] = useState('');

    //implementação dos métodos update ou insert 

    async function insertUpdate() {

        //editar dados 

        if (nome !== '' & telefone !== '' & email !== '' & endereco !== '' & key !== '') {
            firebase.database().ref('perfil').child(key).update({
                nome: nome, telefone: telefone, email: email, idade: idade, endereco: endereco
            })
            Keyboard.dismiss();
            alert('Perfil!');
            clearFields();
            setKey('');
            return;
        }
        //cadastrar dados 
        let perfil = await firebase.database().ref('perfil');
        let chave = perfil.push().key; //comando para salvar é o push 
        perfil.child(chave).set({
            nome: nome,
            telefone: telefone,
            email: email,
            idade: idade,
            endereco: endereco
        });
        Keyboard.dismiss();
        alert('Perfil Cadastrado!');
        clearFields();
    }

    function clearFields(){
        setNome('');
        setTelefone('');
        setEmail('');
        setIdade('');
        setEndereco('');
    }
    return (
        <View style={styles.container}>
            <separator />
            <TextInput
                placeholder='Perfil'
                left={<TextInput.Icon icon="face-smile" />}
                maxLength={40}
                style={styles.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
            />
            <separator />
            <TextInput

                placeholder='Telefone'

                left={<TextInput.Icon icon="phone" />}

                style={styles.input}

                onChangeText={(text) => setTelefone(text)}
                value={telefone}
            />
            <separator />
            <TextInput
                placeholder='Email Pessoal'
                left={<TextInput.Icon icon="inbox" />}
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <separator />
            <TextInput
                placeholder='Idade'
                left={<TextInput.Icon icon="hourglass" />}
                style={styles.input}
                onChangeText={(text) => setIdade(text)}
                value={idade}
            />
            <separator />
            <TextInput
                placeholder='Endereco'
                left={<TextInput.Icon icon="hourglass" />}
                style={styles.input}
                onChangeText={(text) => setEndereco(text)}
                value={endereco}
            />
            <View style={styles.button}>
                <Button
                    onPress={insertUpdate}
                    title="Enviar"
                    color="#3ea6f2"
                />
            </View>
            <separator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },

    button: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#3ea6f2',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },

    input: {
        borderWidth: 1,
        borderColor: '#121212',
        height: 40,
        fontSize: 13,
        borderRadius: 8,
        marginBottom: 10,
    },
    separator: {
        marginVertical: 25,
        borderColor: '#737373',
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3ea6f2',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },

    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 100,
        fontSize: 20
    },

    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 20,
    },

    listar: {
        fontSize: 20,
        textAlign: 'center'
    }
}); 