import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import InicioScreen from "./screens/InicioScreen";
import AutorScreen from "./screens/AutorScreen";
import VideoclubScreen from "./screens/VideoclubScreen";
import DetallesScreen from "./screens/DetallesScreen";
import CurriculumScreen from "./screens/CurriculumScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen
          name="Inicio"
          component={HomeStackNavigator}
          options={{ headerTitle: "Inicio" }}
        />
        <Drawer.Screen
          name="Autor"
          component={AutorScreen}
          options={{ title: "Sobre el autor" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Inicio">
      <HomeStack.Screen
        name="Inicio"
        component={InicioScreen}
        options={{ title: "Inicio", headerStyle: {
          backgroundColor: '#5BA1E5'}, headerTitleStyle: {
            color: 'white'
          }, headerTintColor: 'white'}}
      />
      <HomeStack.Screen
        name="Autor"
        component={AutorScreen}
        options={{ title: "Autor", 
        headerStyle: {
          backgroundColor: '#5BA1E5'}, headerTitleStyle: {
            color: 'white'
          }, headerTintColor: 'white', headerShown:false}
        }
      />
      <HomeStack.Screen
        name="Videoclub"
        component={VideoclubScreen}
        options={{ title: "iVideoclub", headerStyle: {
          backgroundColor: '#5BA1E5'}, headerTitleStyle: {
            color: 'white'
          }, headerTintColor: 'white'}}
      />
      <HomeStack.Screen
        name="Detalles"
        component={DetallesScreen}
        options={{ title: "Detalles", headerStyle: {
          backgroundColor: '#5BA1E5'}, headerTitleStyle: {
            color: 'white'
          }, headerTintColor: 'white'}}
      />
      <HomeStack.Screen
        name="Curriculum"
        component={CurriculumScreen}
        options={{ title: "Curriculum", headerStyle: {
          backgroundColor: '#5BA1E5'}, headerTitleStyle: {
            color: 'white'
          }, headerTintColor: 'white'}}
      />
    </HomeStack.Navigator>
  );
}
