import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  TouchableOpacity
} from 'react-native';
import * as React from 'react';

const Separator = () => {
  return <View style={styles.separator} />;
};

class TelaPrincipal extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/JN.png')} />
        <Text style={styles.paragraph}>COLLECTIONS!</Text>
        <SafeAreaView style={styles.container}>
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
            title="ACESSAR"
            color="#1E90FF"
          />
          <Separator />
          <Button onPress={''} title="AJUDA" color="#1E90FF" />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  logo: {
    width: 317,
    height: 290,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default TelaPrincipal;
