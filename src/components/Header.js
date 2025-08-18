import { View, Text, StyleSheet } from 'react-native';

function Header() {
  return (
        <View style={styles.header}>
        <Text>Logo</Text>
        <View style={styles.menu}></View>
        </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#46d4ffff",
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 20,
    },
    menu: {
        width: 40,
        height: 40,
        backgroundColor: "#1d1d1dff",
    },
});

export default Header