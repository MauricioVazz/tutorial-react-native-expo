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
    backgroundColor: "#b40000ff",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: "40%",
    alignItems: "center",
  },
  footerText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  }
})

export default Botao