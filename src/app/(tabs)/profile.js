import { View, Text, StyleSheet, Button } from "react-native-web";
import { useRouter } from "expo-router";

export default function Profile() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text>Perfil</Text>
            <Button title="Home" onPress={() => router.replace('/')} />
            <Button title="Contato" onPress={() => router.push('/contact')} />
            <Button title="Sobre" onPress={() => router.push('/about')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})