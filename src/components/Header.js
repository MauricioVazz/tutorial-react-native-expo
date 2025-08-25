import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image'
import Entypo from '@expo/vector-icons/Entypo';

function Header({ image }) {
  return (
      <View style={styles.header}>
        <Image
            style={styles.image}
            source={require("../../assets/img/logo.svg")}
        />        
        <Entypo name="menu" size={30} color="black" />
        {/* <View style={styles.menu}></View> */}
        </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#c9c9c9ff",
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 20,
    },
    image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    },
    menu: {
        width: 40,
        height: 40,
        backgroundColor: "#1d1d1dff",
    },
});

export default Header