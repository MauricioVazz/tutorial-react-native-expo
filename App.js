import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Card from './src/components/Card';
import Botao from './src/components/Botao';
import Footer from './src/components/Footer';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <Card titulo="Sung Jin Woo" desc="The Shadow Monark" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQu0tv6_cCj9vnuQFBQlEpXiviyub-VOsMSA&s"/>
        <Card titulo="Itachi Uchira" desc="Exterminador de Clan" img="https://artfiles.alphacoders.com/853/thumb-1920-85391.jpg"/>
        <Card titulo="Satoro Gojo" desc="Kyoshiki Murasaki" img="https://wallpapers.com/images/hd/purple-art-gojo-satoru-hv0uh0ah7kuq26y8.jpg"/>
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
    backgroundColor: "#2e2e2eff",
    flex: 7,
    width: "100%",
    alignItems: "center",
  }
})