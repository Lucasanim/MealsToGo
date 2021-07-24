import React, { useEffect } from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { colors } from "../theme/colors";
import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";
import { CheckoutSuccessScreen } from "../../features/checkout/screens/checkout-success.screen";
import { CheckoutErrorScreen } from "../../features/checkout/screens/checkout-error.screen";

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = ({ route, navigation }) => {
  return (
    <CheckoutStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: { backgroundColor: colors.bg.primary },
      }}
    >
      <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
      <CheckoutStack.Screen
        name="CheckoutSuccess"
        component={CheckoutSuccessScreen}
      />
      <CheckoutStack.Screen
        name="CheckoutError"
        component={CheckoutErrorScreen}
      />
    </CheckoutStack.Navigator>
  );
};
