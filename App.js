import React, { useState } from "react";
// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// SCREENS
import Home from "./screens/Home";
// FOR FONTS
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

const getFonts = () =>
  Font.loadAsync({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Bold-Italic": require("./assets/fonts/OpenSans-BoldItalic.ttf"),
    "Light-Italic": require("./assets/fonts/OpenSans-LightItalic.ttf"),
    "Medium-Italic": require("./assets/fonts/OpenSans-MediumItalic.ttf"),
    "Semi-Bold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    Regular: require("./assets/fonts/OpenSans-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  }
}
