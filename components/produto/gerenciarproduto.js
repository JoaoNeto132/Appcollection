import React, { useState, useEffect, useRef } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Keyboard, Button, FlatList, ActivityIndicator, separator
} from 'react-native';
import { TextInput } from 'react-native-paper';
import firebase from '../../services/connectionFirebase';

const Separator = () => {
    return <View style={styles.separator} />;
}

export default function GerenciarProdutos() {

    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [preco, setPreco] = useState('');
    const [cor, setCor] = useState('');
    const [key, setKey] = useState('');

    //implementação dos métodos update ou insert 

    async function insertUpdate() {

        //editar dados 

        if (nome !== '' & marca !== '' & imagem !== '' & preco !== '' & key !== '') {
            firebase.database().ref('produtos').child(key).update({
                nome: nome, marca: marca, imagem: imagem, preco: preco
            })
            Keyboard.dismiss();
            alert('Produto Editado!');
            clearFields();
            setKey('');
            return;
        }
        //cadastrar dados 
        let produtos = await firebase.database().ref('produtos');
        let chave = produtos.push().key; //comando para salvar é o push 
        produtos.child(chave).set({
            nome: nome,
            marca: marca,
            imagem: imagem,
            preco: preco
        });
        Keyboard.dismiss();
        alert('Produto Cadastrado!');
        clearFields();
    }

    function clearFields(){
        setNome('');
        setMarca('');
        setPreco('');
        setCor('');
    }
    return (
        <View style={styles.container}>
            <separator />
            <TextInput
                placeholder='Produto'
                left={<TextInput.Icon icon="car" />}
                maxLength={40}
                style={styles.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
            />
            <separator />
            <TextInput

                placeholder='Marca'

                left={<TextInput.Icon icon="sale" />}

                style={styles.input}

                onChangeText={(text) => setMarca(text)}
                value={marca}
            />
            <separator />
            <TextInput
                placeholder='Preço (R$)'
                left={<TextInput.Icon icon="sack" />}
                style={styles.input}
                onChangeText={(text) => setPreco(text)}
                value={preco}
            />
            <separator />
            <TextInput
                placeholder='Cor'
                left={<TextInput.Icon icon="palette" />}
                style={styles.input}
                onChangeText={(text) => setCor(text)}
                value={cor}
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