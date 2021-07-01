import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "styled-components";
import Restaurants from "./src/screens/Restaurants";
import { theme } from "./src/theme";
import { Text } from "react-native";
import SafeArea from "./src/components/SafeArea";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurant/context";
import { LocationContextProvider } from "./src/services/location/context";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

function Settings() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}
function Map() {
  return (
    <SafeArea>
      <Text>Map!</Text>
    </SafeArea>
  );
}

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };

  const tabBarIcon =
    (iconName) =>
    ({ size, color }) =>
      <Ionicons name={iconName} size={size} color={color} />;

  const screenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: tabBarIcon(iconName),
    };
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={screenOptions}
                tabBarOptions={{
                  activeTintColor: "#72bafc",
                  inactiveTintColor: "gray",
                }}
              >
                <Tab.Screen name="Restaurants" component={Restaurants} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
