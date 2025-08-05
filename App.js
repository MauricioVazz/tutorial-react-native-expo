import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <Text style={styles.tituloPrincipal}>🚀 Testando no Browser</Text>
      <Text style={styles.subTitulo}>React Native com estilo!</Text>
      <Text style={styles.paragrafo}>Paragrafo</Text>
      <Text style={styles.link}>Clique Aqui</Text>
      <StatusBar style="auto" />
      <View style={styles.box2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20',
  },
  tituloPrincipal: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#00f2ff',
    marginVertical: '10px',
  },
  subTitulo: {
    fontSize: '16px',
    color: '#ccc',
  },
  paragrafo: {
    fontSize: '14px',
    color: '#fff',
    marginVertical: '10px',
  },
  link: {
    fontSize: '12px',
    color: '#00f2ff',
    textDecorationLine: 'underline',
    marginTop: '20px',
    cursor: 'pointer',
    hover: {
      color: '#00bfff',
    },
    marginVertical: '10px',
  },
  box1: {
    width: '100%',
    height: 50,
    backgroundColor: '#00f2ff',
  },
  box2: {
    width: '100%',
    height: 50,
    backgroundColor: '#442c85ff',
  },
});
