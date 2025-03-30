import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons} from "@expo/vector-icons"

export default function Index() {
  return (
    <View style={styles.page}>
      <FilmElement />
    </View>
  );
}

const FilmElement = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
       <View style={styles.cardHeader}>
    <Text style={styles.seriesTitle}>
      Serie 1
    </Text>
    <Ionicons name="play" style={styles.icon}/>
       </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({

  page: {
    flex: 1,
    //justifyContent: "center",
  },

  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
   
    marginBlock: 10,
    marginInline:20,
    height:80
  },

  cardContent: {
    padding: 15,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    color: "white"
  },

  seriesTitle: {
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
    color: 'white',
    shadowColor: 'white',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: .8,
    shadowRadius: 10,
  },

  icon:{
    color: "white",
    fontSize: 20,

    shadowColor: 'lightgreen',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 6,
  }

})
