import { View, Text, StyleSheet, Button } from "react-native-web";
import { useRouter } from "expo-router";

export default function Contact() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text>Página de Contato</Text>
            <Button title="Voltar" onPress={() => router.replace('/')} />
            <Button title="Sobre" onPress={() => router.push('/about')} />
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