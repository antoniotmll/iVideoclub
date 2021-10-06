import React from "react";
import {View, Text } from "react-native";
import HeaderComponenet from "../components/HeaderComponent";
import { Card, Button, Icon, ThemeProvider } from "react-native-elements";
import { CONFIG } from "../shared/config";

export default function InicioScreen(props) {
  return (
    <View>
      <Card>
        <Card.Title style={{ textAlign: "left", fontSize: 15, color: "gray" }}>
          Bienvenido a
        </Card.Title>
        <Card.Title style={{ textAlign: "left", fontSize: 20 }}>
          iVideoClub!
        </Card.Title>
        <Text style={{ marginBottom: 10 }}>
          iVideoclub es una aplicación desarrollada con React Native.{"\n"}
          Para acceder a la gestión de videoclub pulsa el siguiente botón:
        </Text>
        <ThemeProvider theme={theme}>
        <Button
          title="Acceso a iVideclub"
          type="clear"
          icon={<Icon name='video' type='font-awesome-5' containerStyle={{marginRight:50}} color='gray'/>}
          buttonStyle={{ justifyContent: "flex-start"}}
          onPress={() => props.navigation.navigate('Videoclub')}
        />
        </ThemeProvider>
      </Card>
      <Card>
        <Card.Title style={{ textAlign: "left", fontSize: 20 }}>
          Información sobre el autor
        </Card.Title>
        <Text style={{ marginBottom: 10 }}>
          Aplicación desarrollada por Antonio Tomás.
        </Text>
        <ThemeProvider theme={theme}>
        <Button
          title="Consultar información"
          type="clear"
          icon={<Icon name='user' type='font-awesome' containerStyle={{marginRight:50}} color='gray'/>}
          buttonStyle={{ justifyContent: "flex-start"}}
          onPress={() => props.navigation.navigate('Autor')}
        />
        </ThemeProvider>
      </Card>
    </View>
  );
}

const theme = {
  Button: {
    titleStyle: {
      color: 'black',
    },
  },
};