import React, { useContext, useState, useEffect } from "react";
import { ScrollView } from "react-native";

import { List } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { SafeArea } from "../../../components/utility/safe-area-component";
import { CartContext } from "../../../services/cart/cart.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { CreditCardInput } from "../components/credit-card.component";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
  PaymentProcessing,
} from "../components/checkout.styles";

import { payRequest } from "../../../services/checkout/checkout.service";

export const CheckoutSuccessScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="check-bold" />
        <Text variant="label">Success!</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
