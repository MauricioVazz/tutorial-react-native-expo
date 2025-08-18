import { View, Text, StyleSheet } from 'react-native';

function Footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Mauricio</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default Footer