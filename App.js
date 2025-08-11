
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Logo</Text>
        <View style={styles.menu}></View>
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.image}>as</View>
          <View style={styles.text}>
            <Text style={styles.cardText}>Card Titulo</Text>
            <Text style={styles.cardText2}>Card Conteudo Card Conteudo Card Conteudo Card Conteudo</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.image}>as</View>
          <View style={styles.text}>
            <Text style={styles.cardText}>Card Titulo</Text>
            <Text style={styles.cardText2}>Card Conteudo Card Conteudo Card Conteudo Card Conteudo</Text>
          </View>
        </View>
        <View style={styles.botao}>
          <Text style={styles.footerText}>Ver Mais</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Mauricio</Text>
      </View>
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
  header: {
    backgroundColor: "#46d4ffff",
    flex: 1,
    width: "100%",
    justifyContent: "space-between", 
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  content: {
    backgroundColor: "#ff3232ff",
    flex: 7,
    width: "100%",
    alignItems: "center",
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: "#1d1d1dff",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "#473b8dff",
    borderRadius: 10,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    flex: 1,
    justifyContent: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardText2: {
    fontSize: 14,
    color: "#474747ff",
    flexWrap: "wrap",
  },
  botao: {
    backgroundColor: "#0054b4ff",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: "40%",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: '#a202ffff',
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  }
})