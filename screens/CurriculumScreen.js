import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'

export default function CurriculumScreen() {
  return (
    <View>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.texto}>2010-actualidad</ListItem.Title>
          <ListItem.Subtitle>Profesor del Máster Universitario en Desarrollo de Software para Dispositivos Móviles.</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem  bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.texto}>2015-actualidad</ListItem.Title>
          <ListItem.Subtitle>Profesor del Máster Universitario en Desarrollo de Aplicaciones y Servicios Web.</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem  bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.texto}>2008-2010</ListItem.Title>
          <ListItem.Subtitle>Sexador de pollos.</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}


const styles = StyleSheet.create({
  texto: {
    fontWeight: "bold",
    fontSize: 15,
  }
})