import React, { useEffect } from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { colors } from "../theme/colors";

import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraSceen } from "../../features/settings/screens/camera.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: { backgroundColor: colors.bg.primary },
      }}
    >
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraSceen} />
    </SettingsStack.Navigator>
  );
};
