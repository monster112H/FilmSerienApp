import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as AsyncStorage from "../../utils/AsyncStorage.js";
import React, { useEffect, useState } from "react";
import DATA from "../../data.json";

type Serie = {
  id: number;
  titel: string;
  season: number;
  episode: number;
};

const addEpisode = () => {
  //alert(JSON.stringify(getData()));
};

const deleteSerie = () => {
  alert("DONE!!!");
};

export default function Index() {
  const [counter, setCounter] = useState(0);

  const [data, setData] = useState<Serie[] | null>(null);

  const save = async () => {
    AsyncStorage.setItem("@data", [
      {
        titel: "Serie",
        season: 2,
        episode: 1,
      },
      {
        titel: "Serie",
        season: 2,
        episode: 5,
      },
      {
        titel: "Serie",
        season: 4,
        episode: 1,
      },
    ]);
    load();
  };

  const load = async () => {
    setData(await AsyncStorage.getItem("@data"));
  };

  useEffect(() => {
    load();
    console.log(data);
  }, []);

  return (
    <View style={styles.page}>
      <ScrollView>
        {data ? (
          data.map((item,index) => {
            return (
              <FilmElement
                id={index}
                titel={item.titel}
                season={item.season}
                episode={item.episode}
              />
            );
          })
        ) : (
          <Text style={{ color: "white" }}>Loading...</Text>
        )}

        <TouchableOpacity onPress={() => save()}>
          <View style={{ alignItems: "center", margin: 25 }}>
            <Ionicons name="add-sharp" style={styles.addIcon} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const FilmElement = ({ titel, season, episode,id }: Serie) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.seriesTitle}>{titel} {id}</Text>
          <TouchableOpacity onPress={deleteSerie}>
            <Ionicons name="checkmark-done" style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.cardBody}>
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <Text style={styles.seriesText}>Staffel: {season}</Text>
            <TouchableOpacity>
              <Ionicons name="add-circle-outline" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <Text style={styles.seriesText}>Folge: {episode}</Text>
            <TouchableOpacity onPress={addEpisode}>
              <Ionicons name="add-circle-outline" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },

  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 16,
    borderColor: "#8b8c8b",
    borderWidth: 0.2,
    marginBottom: 16,
    shadowColor: "#8b8c8b",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    // shadowOpacity: .2,
    shadowRadius: 10,

    marginBlock: 10,
    marginInline: 20,
    height: 80,
  },

  cardContent: {
    padding: 15,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  seriesTitle: {
    fontSize: 20,
    //fontFamily: 'Inter_600SemiBold',
    color: "white",
    fontWeight: "bold",

    textShadowColor: "#8b8c8b",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
  },

  icon: {
    color: "white",
    fontSize: 20,
    textShadowColor: "#94e0a0",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },

  cardBody: {
    flexDirection: "row",
    //justifyContent: 'space-evenly',
    gap: 40,
    alignItems: "center",
    marginBottom: 12,
  },

  seriesText: {
    color: "white",
    fontWeight: "500",
  },

  addIcon: {
    color: "white",
    //fontWeight: "500",
    fontSize: 35,
  },
});
