import React, { useState, useEffect } from "react";
import * as firebase from "firebase";

import { ThemeProvider } from "styled-components";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";

import { Navigator } from "./src/infrastructure/navigation/index";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDt3jlPkh56zO5HM_0qf6wEWORtj03zngc",
  authDomain: "mealstogo-917c0.firebaseapp.com",
  projectId: "mealstogo-917c0",
  storageBucket: "mealstogo-917c0.appspot.com",
  messagingSenderId: "514935910488",
  appId: "1:514935910488:web:7695f1aa43e580097e9a2d",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  let [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });

  let [latoLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigator />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
