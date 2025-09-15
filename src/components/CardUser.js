import { View, Text, StyleSheet,} from 'react-native';
import {Image} from 'expo-image'

function CardUser({ name, email, avatar }) {
    return (
        <View style={styles.card}>
            {/* <View style={styles.image}>as</View> */}
          <Image
            style={styles.image}
            source={avatar}
          />
            <View style={styles.text}>
            <Text style={styles.cardText}>{name}</Text>
          <Text style={styles.cardText2}>{email}</Text>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
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

export default CardUser