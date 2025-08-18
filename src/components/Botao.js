import { View, Text, StyleSheet } from 'react-native';

function Botao() {
  return (
    <View style={styles.botao}>
        <Text style={styles.footerText}>Ver Mais</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#0054b4ff",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: "40%",
    alignItems: "center",
  },
  footerText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  }
})

export default Botao