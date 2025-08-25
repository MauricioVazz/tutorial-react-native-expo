import { View, Text, StyleSheet } from 'react-native';

function Footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; Mauricio</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: '#c9c9c9ff',
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#000",
    fontSize: 10,
    fontWeight: "bold",
  }
})

export default Footer