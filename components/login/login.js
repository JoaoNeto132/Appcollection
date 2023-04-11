import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import firebase from '../../services/connectionFirebase'
const Separator = () => <View style={styles.separator} />;

export default function Login({ changeStatus }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('login');

  //Método handleLogin para verificar se é login ou cadastrar

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/JN1.png')}
        style={{ width: 420, height: 340 }}></Image>
      <SafeAreaView>

        <TextInput
          label="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          right={<TextInput.Icon icon="email" />}
        />
        <TextInput
          label="Senha"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          right={<TextInput.Icon icon="eye" />}
        />
        <hr />
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="ACESSAR"
          color="#000000"
        />
      </SafeAreaView>

      <TouchableOpacity
        style={[
          styles.handleLogin,
          { backgroundColor: type === 'login' ? '#4682B4' : '#141414' },
        ]}
        onPress={'handleLogin'}>
        <Text style={styles.loginText}>
          {type === 'login' ? 'Acessar' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setType((type) => (type === 'login' ? 'cadastrar' : 'login'))
        }>
        <Text style={{ textAlign: 'center' }}>
          {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    marginLeft: 40,
    backgroundColor: '#FFF',
    borderRadius: 4,
    height: 45,
    width: 320,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414'
  },
  loginText: {
    textAlign: 'center'
  }
}
);
