import { View, Text, StyleSheet, Button } from "react-native-web";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import CardUser from "../../components/CardUser.js";

export default function Contact() {
    const router = useRouter();

    const [users, setUsers] = useState([])

    // users = []

    useEffect(() => {
        const listUsers = async () => {
            const response = await fetch("http://localhost:3000/profile")
            if (response.ok) {
                console.log('Lista carregada com sucesso')
                const data = await response.json()
                console.log(data.profile)
                setUsers(data.profile)
            } else {
                console.log('Erro ao carregar lista')
            }
        }

        listUsers()
    }, [])

    return (
        <View style={styles.container}>
            <Text>Página de Contato</Text>
            {users.map((user) => (
                <CardUser
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    avatar={user.avatar}
                />
            ))}
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