import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Main() {
    return (

        <>
            <TopBar></TopBar>
            <Link href={"/settings"}>Einstellungen</Link>
        </>

    );
}

const TopBar = () => {
    return (
        <View
            style={[
                styles.container,
                {
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: 'row',
                },
            ]}>
            <View>

            </View>
            <View style={{ flex: 1, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 1, backgroundColor: 'green' }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: .1,
        padding: 10,
    },
});
