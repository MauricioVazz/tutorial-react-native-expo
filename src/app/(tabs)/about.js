import { View, Text, StyleSheet, Button } from "react-native-web";
import { useRouter } from "expo-router";

export default function About() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text>Sobre</Text>
            <Button title="Voltar" onPress={() => router.replace('/')} />
            <Button title="Contato" onPress={() => router.push('/contact')} />
            <Button title="Perfil" onPress={() => router.push('/profile')} />
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