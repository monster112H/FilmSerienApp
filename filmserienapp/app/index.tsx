import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Index() {
    return (
        <View>
            <Link href={"/main"} style={styles.links}>Start</Link>
            <Link href={"/settings"} style={styles.links}>Einstellungen</Link>
        </View>
    );
}



const styles = StyleSheet.create({
   links:{
    fontSize: 30,
    padding: 20,
    margin: 20,
    fontWeight: "bold",
    textAlign:"center",
    backgroundColor: "#123456",
    color: "white"
   }
});
