import { View, Text, StyleSheet, Button } from "react-native-web";
import { useRouter } from "expo-router";
import { AsyncStorage } from '@react-native-async-storage/async-storage'

export default function Profile() {
    const router = useRouter();

    const handleLogin = async () => {
        await AsyncStorage.removeItem('logado')
        router.replace('/login')
    }

    return (
        <View style={styles.container}>
            <Text>Perfil</Text>
            <Button title="Home" onPress={() => router.replace('/')} />
            <Button title="Contato" onPress={() => router.push('/contact')} />
            <Button title="Sobre" onPress={() => router.push('/about')} />
            <Button title="Logout" onPress={handleLogin} />
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