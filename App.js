import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Card from './src/components/Card';
import Botao from './src/components/Botao';
import Footer from './src/components/Footer';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Card />
        <Card />
        <Botao />
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#56ff46ff",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "#ff3232ff",
    flex: 7,
    width: "100%",
    alignItems: "center",
  }
})