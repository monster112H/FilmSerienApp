import { Alert, ScrollView, Text, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import DATA from "../../data.json"


type Variables = {
  titel: string;
  season: number;
  episode: number;
}

const addSerie = () => {
  alert("neue Serie!!!");
};

const addSeason = () => {
  alert("Staffel!!!");
};

const addEpisode = () => {
  alert("Folge!!!");
};

const deleteSerie = () => {
  alert("DONE!!!");
};

export default function Index() {

  return (
    <View style={styles.page}>
      <ScrollView >
        {DATA.map((item) => {
          return (
            <FilmElement titel={item.titel} season={item.season} episode={item.episode} />
          )
        })}

        <TouchableOpacity onPress={addSerie}>
          <View style={{ alignItems: "center", margin: 25 }}>
            <Ionicons name="add-sharp" style={styles.addIcon} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const FilmElement = ({ titel, season, episode }: Variables) => {



  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.seriesTitle}>
            {titel}
          </Text>
          <TouchableOpacity onPress={deleteSerie}>
            <Ionicons name="checkmark-done" style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.cardBody}>
          <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center', }}>
            <Text style={styles.seriesText}>
              Staffel:  {season}
            </Text>
            <TouchableOpacity onPress={addSeason}>
              <Ionicons name="add-circle-outline" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center', }}>
            <Text style={styles.seriesText}>
              Folge:  {episode}
            </Text>
            <TouchableOpacity onPress={addEpisode}>
              <Ionicons name="add-circle-outline" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({

  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#000',
  },

  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    borderColor: "#b6bab6",
    borderWidth: .2,
    marginBottom: 12,
    shadowColor: 'green',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    // shadowOpacity: .2,
    shadowRadius: 10,

    marginBlock: 10,
    marginInline: 20,
    height: 80
  },

  cardContent: {
    padding: 15,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  seriesTitle: {
    fontSize: 20,
    //fontFamily: 'Inter_600SemiBold',
    color: 'white',
    fontWeight: "bold",

    textShadowColor: '#8b8c8b',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
  },

  icon: {
    color: "white",
    fontSize: 20,
    textShadowColor: '#94e0a0',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },

  cardBody: {
    flexDirection: 'row',
    //justifyContent: 'space-evenly',
    gap: 40,
    alignItems: 'center',
    marginBottom: 12,
  },

  seriesText: {
    color: "white",
    fontWeight: '500',
    fontSize: 17
  },

  addIcon: {
    color: "white",
    //fontWeight: "500",
    fontSize: 35,

  }
})
