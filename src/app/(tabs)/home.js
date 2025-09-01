import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Botao from '../../components/Botao';
import Footer from '../../components/Footer';
import { Link } from 'expo-router';


export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.links}>
        <Link href={"contact"}><Text style={styles.textLink}>Contato</Text></Link>
        <Link href={"about"}><Text style={styles.textLink}>Sobre</Text></Link>
      </View>
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
    backgroundColor: "#ffffffff",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "#2e2e2eff",
    flex: 7,
    width: "100%",
    alignItems: "center",
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  textLink: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000ff",
  }
})