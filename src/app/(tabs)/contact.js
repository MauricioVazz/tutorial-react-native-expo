import { View, Text, StyleSheet, Button, ScrollView, FlatList } from "react-native-web";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import CardUser from "../../components/CardUser.js";
import { useUserStore } from "../../stores/useUserStore.js";

export default function Contact() {
    const router = useRouter();
    const { users, setUsers } = useUserStore();


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
            <FlatList
                data={users}
                renderItem={({ item }) => <CardUser
                    key={item.id}
                    id={item.id}
                    nome={item.nome}
                    email={item.email}
                    avatar={item.avatar}
                />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
    },
})