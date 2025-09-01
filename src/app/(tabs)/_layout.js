import { Stack, Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function RootLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#5215a1ff",
            tabBarInactiveTintColor: "#808080ff",
            headerShown: false,
            tabBarStyle: { backgroundColor: "#ffffffaa" },
            tabBarLabelStyle: { fontSize: 8 },
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    HeaderShown: false,
                    // tabBarShowLabel: false,
                    tabBarLabelStyle: { fontSize: 8 },
                    tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "Sobre",
                    // tabBarShowLabel: false,
                    tabBarLabelStyle: { fontSize: 8 },
                    tabBarIcon: ({ color }) => <FontAwesome5 name="house-user" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="contact"
                options={{
                    title: "Contato",
                    // tabBarShowLabel: false,
                    tabBarLabelStyle: { fontSize: 8 },
                    tabBarIcon: ({ color }) => <MaterialIcons name="contacts" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    // tabBarShowLabel: false,
                    tabBarLabelStyle: { fontSize: 8 },
                    tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={24} color={color} />
                }}
            />
        </Tabs>
    )
}