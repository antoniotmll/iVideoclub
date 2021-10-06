import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import {
  Card,
  ListItem,
  Button,
  Icon,
  Divider,
  Avatar,
} from "react-native-elements";
import { MOVIES } from "../shared/peliculas";
import { CONFIG } from "../shared/config";

export default class VideclubScreen extends React.Component {
  constructor(props) {
    super(props);
     this.navigate = this.props.navigation.navigate;

    this.state = {
      peliculas: [],
      isLoading: false,
      error: false
    };
  }

  componentDidMount() {
    this.loadData();
  }
  async loadData() {
    try {
      this.setState({ isLoading: true });
      let response = await fetch(CONFIG.baseUrl);
      let data = await response.json();
      console.log(data);
      this.setState({ peliculas: data, isLoading: false });
  } catch (error) {
      console.log(error);
      this.setState({ error: error, isLoading: false });
  }
  }

  render() {
    const { peliculas, error, isLoading } = this.state;

    if (error)
      return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} ><Text>{error.message}</Text></View>;

    if (isLoading)
      return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} ><Text>Cargando...</Text></View>;

    return (
      <ScrollView style={styles.container}>
        {peliculas.map((pelicula) => (
          <ListItem
            bottomDivider
            key={pelicula.id}
            onPress={() => this.props.navigation.navigate("Detalles",{
              pelicula

            })}
          >
            <Avatar source={{ uri: pelicula.poster }} size="medium" />
            <ListItem.Content>
              <ListItem.Title>{pelicula.title}</ListItem.Title>
              <ListItem.Subtitle>
                <Text style={styles.texto}>Director:</Text> {pelicula.director}
              </ListItem.Subtitle>
              <ListItem.Subtitle>
                <Text style={styles.texto}>Año:</Text> {pelicula.year}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  texto: {
    fontWeight: "bold",
  },
});
