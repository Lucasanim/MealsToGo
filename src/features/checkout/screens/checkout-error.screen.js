import React, { useContext, useState, useEffect } from "react";
import { ScrollView } from "react-native";

import { List } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { SafeArea } from "../../../components/utility/safe-area-component";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
  PaymentProcessing,
} from "../components/checkout.styles";

import { colors } from "../../../infrastructure/theme/colors";

export const CheckoutErrorScreen = ({ route, navigation }) => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
