import React from "react";
import { View } from "react-native";
import { Header, Button } from "react-native-elements";

export default function HeaderComponent(props) {
  return (
    <View>
      <Header
        containerStyle={{
          backgroundColor: "#5BA1E5",
          justifyContent: "space-around",
        }}
        leftComponent={{
          text: props.titulo,
          style: {
            color: "#fff",
            fontSize: 20,
            marginLeft: 10,
            marginRight: -35,
          },
        }}
    />
    </View>
  );
}
