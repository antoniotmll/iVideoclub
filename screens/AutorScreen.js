import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, ListItem, Button, Icon, ThemeProvider } from "react-native-elements";
import { Linking} from 'react-native';
import Header from '../components/HeaderComponent';

export default function AutorScreen(props) {
  return (
    <View>
      <Header titulo="Autor"></Header>
      <Card>
        <Card.Title style={{ textAlign: "left", fontSize: 20 }}>Información</Card.Title>
        <Text style={{ marginBottom: 10 }}>
          Aplicación desarrollada por Antonio Tomás. A continuación puede consultar más información sobre el autor.
        </Text>
        <ThemeProvider theme={theme}>
        <Button
          title="Currículum vítae"
          type="clear"
          icon={<Icon name='book-open' type='font-awesome-5' containerStyle={{marginRight:50}} color='gray'/>}
          buttonStyle={{ justifyContent: "flex-start"}}
          onPress={() => props.navigation.navigate('Curriculum')}
        />
        </ThemeProvider>
        <Card.Divider/>
        <ThemeProvider theme={theme}>
        <Button
          title="Correo: atl22@alu.ua.es"
          type="clear"
          icon={<Icon name='envelope' type='font-awesome-5' containerStyle={{marginRight:50}} color='gray'/>}
          buttonStyle={{ justifyContent: "flex-start"}}
          onPress={() => Linking.openURL('mailto:atl22@alu.ua.es')}
        />
        </ThemeProvider>
        <Card.Divider/>
        <ThemeProvider theme={theme}>
        <Button
          title="Twitter: @Antoniotmll"
          type="clear"
          icon={<Icon name='twitter' type='font-awesome-5' containerStyle={{marginRight:50}} color='gray'/>}
          buttonStyle={{ justifyContent: "flex-start"}}
          onPress={() => Linking.openURL('https://twitter.com/Antoniotmll')}
        />
        </ThemeProvider>
        <Card.Divider/>
        <ThemeProvider theme={theme}>
        <Button
          title="Teléfono: 664862821"
          type="clear"
          icon={<Icon name='phone' type='font-awesome' containerStyle={{marginRight:50}} color='gray'/>}
          buttonStyle={{ justifyContent: "flex-start"}}
          onPress={() => Linking.openURL('tel:{664862821}')}
        />
        </ThemeProvider>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const theme = {
  Button: {
    titleStyle: {
      color: 'black',
    },
  },
};