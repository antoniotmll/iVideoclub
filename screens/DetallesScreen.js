import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function DetailsScreen(props) {
  return (
    <ScrollView>
      <Card>
        <Card.Image style={{width : '100%', height: 500}}
        source = {{ uri: props.route.params.pelicula.poster }}></Card.Image>
        <Card.Title style={{fontSize: 25, textAlign: 'left', paddingTop: 10}}>{props.route.params.pelicula.title}</Card.Title>
        <Text><Text style={{fontWeight:'bold'}}>Director:</Text> {props.route.params.pelicula.director}</Text>
        <Text><Text style={{fontWeight:'bold'}}>Año:</Text> {props.route.params.pelicula.year}</Text>
        <Text><Text style={{fontWeight:'bold'}}>Sinopsis:</Text> {props.route.params.pelicula.synopsis}</Text>
      </Card>
    </ScrollView>
  );
}
