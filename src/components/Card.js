import { View, Text, StyleSheet,} from 'react-native';
import {Image} from 'expo-image'

function Card({ titulo, desc, img }) {
  return (
      <View style={styles.container}>      
        <View style={styles.card}>
            {/* <View style={styles.image}>as</View> */}
          <Image
            style={styles.image}
            source={img}
          />
            <View style={styles.text}>
            <Text style={styles.cardText}>{titulo}</Text>
          <Text style={styles.cardText2}>{desc}</Text>
            </View>
        </View>
      </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  }
})

export default Card