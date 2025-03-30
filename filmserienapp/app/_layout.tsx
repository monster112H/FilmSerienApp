import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: "Home",
                }} /> 
            <Stack.Screen
                name="main"
                options={{
                    headerTitle: "",
                }} />
            <Stack.Screen
                name="settings"
                options={{
                    headerTitle: "Einstellungen",
                }} />    
        </Stack>);

}
